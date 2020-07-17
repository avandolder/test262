// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: An empty iterator wihtout an initial value throws.
info: _
features: [iterator-helpers]
---*/

const iter = [].values();
assert.throws(TypeError, () => iter.reduce((x, y) => x + y));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
