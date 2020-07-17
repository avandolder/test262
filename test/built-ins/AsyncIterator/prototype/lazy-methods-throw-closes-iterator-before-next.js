// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Calling `throw` on a lazy %AsyncIterator.prototype% method closes the source iterator.
info: >
  Iterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class TestError extends Error {}

class TestIterator extends AsyncIterator {
  async next() { 
    return {done: false, value: 1};
  }

  closed = false;
  async return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

async function* gen(x) { yield x; }

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(gen),
];

(async () => {
  for (const method of methods) {
    const iter = new TestIterator();
    const iterHelper = method(iter);

    assert.sameValue(iter.closed, false);
    try {
      await iterHelper.throw(new TestError());
      assert.sameValue(true, false, 'Expected reject.');
    } catch (err) {
      assert.sameValue(err instanceof TestError, true);
    }
    assert.sameValue(iter.closed, true);

    const {done, value} = await iterHelper.next();
    assert.sameValue(done, true);
    assert.sameValue(value, undefined);
  }
})().then($DONE, $DONE);



