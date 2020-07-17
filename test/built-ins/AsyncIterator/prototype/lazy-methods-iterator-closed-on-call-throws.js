// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods close the iterator if callback throws.
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
  async return() {
    this.closed = true;
    return {done: true};
  }
}

function fn() {
  throw new TestError();
}
const methods = [
  iter => iter.map(fn),
  iter => iter.filter(fn),
  iter => iter.flatMap(fn),
];

(async () => {
  for (const method of methods) {
    const iter = new TestAsyncIterator();
    assert.sameValue(iter.closed, false);

    try {
      await method(iter).next();
      assert.sameValue(true, false, 'Expected exception');
    } catch (err) {
      assert.sameValue(err instanceof TestError, true);
    }
    assert.sameValue(iter.closed, true);
  }
})().then($DONE, $DONE);




