// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
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
assert.throws(Error, () => iter.every(fn));
assert.sameValue(iter.closed, false);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
