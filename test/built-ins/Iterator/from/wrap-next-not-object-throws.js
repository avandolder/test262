// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

const iter = (value) => Iterator.from({
  next: () => value,
});

assert.throws(TypeError, () => iter(undefined).next());
assert.throws(TypeError, () => iter(null).next());
assert.throws(TypeError, () => iter(0).next());
assert.throws(TypeError, () => iter(false).next());
assert.throws(TypeError, () => iter('test').next());
assert.throws(TypeError, () => iter(Symbol('')).next());

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
