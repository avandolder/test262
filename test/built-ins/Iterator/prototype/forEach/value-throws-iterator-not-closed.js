// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If getting value fails, don't close the iterator.
info: _
features: [iterator-helpers]
---*/

class TestError extends Error {}
class TestIterator extends Iterator {
  next() {
    return new Proxy({done: false}, {get: (target, key, receiver) => {
      if (key === 'value')
        throw new TestError();
      return 0;
    }});
  }

  closed = false;
  return() {
    closed = true;
  }
}

const iterator = new TestIterator();
assert.sameValue(iterator.closed, false, 'iterator starts unclosed');
assert.throws(TestError, () => iterator.forEach(x => x));
assert.sameValue(iterator.closed, false, 'iterator remains unclosed');

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
