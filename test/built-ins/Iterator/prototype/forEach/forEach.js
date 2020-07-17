// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test for forEach.
info: _
features: [iterator-helpers]
---*/

const log = [];
const fn = (value) => log.push(value);
const iter = [1, 2, 3].values();

assert.sameValue(iter.forEach(fn), undefined);
assert.sameValue(log.join(','), '1,2,3');

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
