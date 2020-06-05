// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const reducer = (acc, value) => acc;
const iterator = [1, 2, 3].values();

assert.sameValue(iterator.reduce(reducer), 1);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
