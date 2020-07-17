// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If fn is not callable, throw a TypeError.
info: |
  2.1.4.11 %Iterator.prototype%.some ( fn )
  ...
  2. If IsCallable(fn) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

const iter = [].values();

assert.throws(TypeError, () => iter.some());
assert.throws(TypeError, () => iter.some(undefined));
assert.throws(TypeError, () => iter.some(null));
assert.throws(TypeError, () => iter.some(0));
assert.throws(TypeError, () => iter.some(false));
assert.throws(TypeError, () => iter.some(''));
assert.throws(TypeError, () => iter.some(Symbol('')));
assert.throws(TypeError, () => iter.some({}));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
