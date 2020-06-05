// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const reducer = (x, y) => 0;
const iterator = [].values();

assert.sameValue(iterator.reduce(reducer, 1), 1);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
