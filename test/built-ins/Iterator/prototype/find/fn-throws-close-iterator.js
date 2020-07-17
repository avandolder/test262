// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If fn is not callable, throw a TypeError.
info: |
  2.1.4.13 %Iterator.prototype%.find ( fn )
  ...
  2. If IsCallable(fn) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    return { done: this.closed };
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = (value) => { throw new Error(); };
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assert.throws(Error, () => iter.find(fn));
assert.sameValue(iter.closed, true);



