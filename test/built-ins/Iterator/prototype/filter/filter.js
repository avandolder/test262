// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of filter.
info: _
features: [iterator-helpers]
---*/

let iter = [1, 2, 3].values().filter(x => x % 2);

for (const v of [1, 3]) {
  let result = iter.next();
  assert.sameValue(result.done, false);
  assert.sameValue(result.value, v);
}

assert.sameValue(iter.next().done, true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
