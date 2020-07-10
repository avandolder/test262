// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const iter = [1, 3, 5].values();
const fn = (value) => value % 2 == 0;

assert.sameValue(iter.some(fn), false);

assert.sameValue([].values().some(x => x), false);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
