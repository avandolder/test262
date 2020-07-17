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

const iter = [].values();

assert.throws(TypeError, () => iter.find());
assert.throws(TypeError, () => iter.find(undefined));
assert.throws(TypeError, () => iter.find(null));
assert.throws(TypeError, () => iter.find(0));
assert.throws(TypeError, () => iter.find(false));
assert.throws(TypeError, () => iter.find(''));
assert.throws(TypeError, () => iter.find(Symbol('')));
assert.throws(TypeError, () => iter.find({}));



