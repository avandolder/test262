// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If getting value fails, don't close the iterator.
info: |
  2.1.4.9 %Iterator.prototype%.toArray ( )
  ...
  3. Repeat,
    ...
    c. Let value be ? IteratorValue(next).
features: [iterator-helpers]
---*/

class TestError extends Error {}
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {
        throw new TestError();
      },
    };
  }

  closed = false;
  return() {
    closed = true;
  }
}

const iterator = new TestIterator();
assert.sameValue(iterator.closed, false, 'iterator starts unclosed');
assert.throws(TestError, () => iterator.toArray());
assert.sameValue(iterator.closed, false, 'iterator remains unclosed');



