// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
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

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
