// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %AsyncIterator.prototype%.flatMap closes the iterator when IteratorNext throws.
info: >
  Iterator Helpers proposal 2.1.6.7
  1. Repeat,
    ...
    k. Repeat, while innerAlive is true,
      i. Let innerNextPromise be IteratorNext(innerIterator).
      ii. IfAbruptCloseAsyncIterator(innerNextPromise, iterated).
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  async next() {
    return {done: false, value: 0};
  }

  closed = false;
  async return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

class TestError extends Error {}
class InnerIterator extends AsyncIterator {
  async next() {
    throw new TestError();
  }
}

const iter = new TestIterator();
const mapped = iter.flatMap(x => new InnerIterator());

assert.sameValue(iter.closed, false);
mapped.next().then(
  _ => assert.sameValue(true, false, 'Expected reject.'),
  err => {
    assert.sameValue(err instanceof TestError, true);
    assert.sameValue(iter.closed, true);
  }
).then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
