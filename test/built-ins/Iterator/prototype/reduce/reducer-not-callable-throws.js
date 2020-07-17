// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If reducer is not callable, throw a TypeError.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  ...
  2. If IsCallable(reducer) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    return { done: false, value: 0 };
  }
}

const iter = new TestIterator();
assert.throws(TypeError, () => iter.reduce());
assert.throws(TypeError, () => iter.reduce(undefined));
assert.throws(TypeError, () => iter.reduce(null));
assert.throws(TypeError, () => iter.reduce(0));
assert.throws(TypeError, () => iter.reduce(false));
assert.throws(TypeError, () => iter.reduce(''));
assert.throws(TypeError, () => iter.reduce(Symbol('')));
assert.throws(TypeError, () => iter.reduce({}));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
