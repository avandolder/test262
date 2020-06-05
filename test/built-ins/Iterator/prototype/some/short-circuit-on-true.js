// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const iter = [1, 2, 3].values();
const log = [];
const fn = (value) => {
  log.push(value.toString());
  return value % 2 == 0;
};

assert.sameValue(iter.some(fn), true);
assert.sameValue(log.join(','), '1,2');

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
