// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const iter = [].values();
const array = iter.toArray();

assert.sameValue(Array.isArray(array), true);
assert.sameValue(array.length, 0);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
