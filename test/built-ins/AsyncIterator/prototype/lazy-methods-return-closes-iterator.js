// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Calling `return` on a lazy %AsyncIterator.prototype% method closes the source iterator.
info: >
  Iterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

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

    const {done, value} = await iterHelper.next()
    assert.sameValue(iter.closed, false);

    const result = await iterHelper.return(0);
    assert.sameValue(iter.closed, true);
    assert.sameValue(result.done, true);
    assert.sameValue(result.value, 0);
  }

  for (const method of methods) {
    const iter = new TestIterator();
    const iterHelper = method(iter);

    assert.sameValue(iter.closed, false);
    const {done, value} = await iterHelper.return(0);
    assert.sameValue(iter.closed, true);
    assert.sameValue(done, true);
    assert.sameValue(value, 0);
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
