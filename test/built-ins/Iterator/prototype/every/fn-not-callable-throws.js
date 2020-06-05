// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const iter = [].values();

assert.throws(TypeError, () => iter.every(undefined));
assert.throws(TypeError, () => iter.every(null));
assert.throws(TypeError, () => iter.every(0));
assert.throws(TypeError, () => iter.every(false));
assert.throws(TypeError, () => iter.every(''));
assert.throws(TypeError, () => iter.every(Symbol('')));
assert.throws(TypeError, () => iter.every({}));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
