// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If calling next throws, do not close the iterator.
info: |
  2.1.4.11 %Iterator.prototype%.some ( fn )
  ...
  3. Repeat,
    a. Let next be ? IteratorStep(iterated).
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    throw new Error();
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = () => {};
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assert.throws(Error, () => iter.some(fn));
assert.sameValue(iter.closed, false);



