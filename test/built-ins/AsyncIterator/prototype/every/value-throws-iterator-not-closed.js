// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If getting value fails, don't close the iterator.
info: _
flags: [async]
features: [iterator-helpers]
---*/

class TestError extends Error {}
class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({
      done: false,
      get value() {
        throw new TestError();
      }
    });
  }

  closed = false;
  return() {
    closed = true;
  }
}

const iterator = new TestIterator();
assert.sameValue(iterator.closed, false, 'iterator starts unclosed');
iterator.every(x => x).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof TestError, true);
  assert.sameValue(iterator.closed, false, 'iterator remains unclosed');
}).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
