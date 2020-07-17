// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of toArray.
info: _
features: [iterator-helpers]
---*/


const iter = [1, 2, 3].values();
assert.sameValue(Array.isArray(iter), false);

const array = iter.toArray();
assert.sameValue(Array.isArray(array), true);
assert.sameValue(array.length, 3);

const expected = [1, 2, 3];
for (const item of array) {
  const expect = expected.shift();
  assert.sameValue(item, expect);
}

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
