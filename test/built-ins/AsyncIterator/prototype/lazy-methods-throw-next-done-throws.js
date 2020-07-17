// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods throw if `next.done` throws.
info: >
  AsyncIterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class TestError extends Error {}
class TestAsyncIterator extends AsyncIterator {
  async next() {
    return {
      get done() {
        throw new TestError();
      }
    };
  }

  closed = false;
  async return() {
    this.closed = true;
    return {done: true};
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
    const iterator = new TestAsyncIterator();
    assert.sameValue(iterator.closed, false);
    try {
      await method(iterator).next();
      assert.sameValue(true, false, 'Expected reject');
    } catch (err) {
      assert.sameValue(err instanceof TestError, true);
    }
    assert.sameValue(iterator.closed, false);
  }
})().then($DONE, $DONE);



