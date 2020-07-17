// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods close the iterator if `yield` throws.
info: >
  AsyncIterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class TestError extends Error {}
class TestAsyncIterator extends AsyncIterator {
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
  iter => iter.filter(x => true),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(gen),
];

(async () => {
  for (const method of methods) {
    const iterator = new TestAsyncIterator();
    const iteratorHelper = method(iterator);

    assert.sameValue(iterator.closed, false);
    await iteratorHelper.next();

    try {
      await iteratorHelper.throw(new TestError());
      assert.sameValue(true, false, 'Expected exception');
    } catch (err) {
      assert.sameValue(err instanceof TestError, true);
    }
    assert.sameValue(iterator.closed, true);
  }
})().then($DONE, $DONE);



