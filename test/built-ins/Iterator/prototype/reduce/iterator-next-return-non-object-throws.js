// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


class TestIterator extends Iterator {
  constructor(value) {
    super();
    this.value = value;
  }

  next() {
    return this.value;
  }
}

const sum = (x, y) => x + y;

let iter = new TestIterator(undefined);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(null);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(0);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(false);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator('');
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(Symbol(''));
assert.throws(TypeError, () => iter.reduce(sum));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
