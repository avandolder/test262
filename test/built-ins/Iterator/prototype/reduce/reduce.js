// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test for reduce.
info: _
features: [iterator-helpers]
---*/

const reducer = (acc, value) => acc + value;
const iterator = [1, 2, 3].values();

assert.sameValue(iterator.reduce(reducer, 0), 6);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
