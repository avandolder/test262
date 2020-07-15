// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods don't close the iterator if `then` returned by `next` throws.
info: >
    AsyncIterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class TestError extends Error {}

class TestIterator extends AsyncIterator {
  next() {
    return {
      then() {
        throw new TestError();
      }
    };
  }

  closed = false;
  async return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

const methods = [
  ["map", x => x],
  ["filter", x => true],
  ["take", Infinity],
  ["drop", 0],
  ["asIndexedPairs", undefined],
  ["flatMap", async function*(x) { yield x; }],
];

(async () => {
  for (const [method, arg] of methods) {
    const iterator = new TestIterator();
    assert.sameValue(iterator.closed, false);

    try {
      await iterator[method](arg).next();
      assert.sameValue(true, false, 'Expected exception');
    } catch(err) {
      console.log(err);
      assert.sameValue(err instanceof TestError, true);
    }
    assert.sameValue(iterator.closed, false);
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
