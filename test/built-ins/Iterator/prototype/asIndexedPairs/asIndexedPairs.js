// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoketest for asIndexedPairs.
info: |
  Iterator Helpers proposal 2.1.5.6
features: [iterator-helpers]
---*/

const iter = [1, 2, 3].values().asIndexedPairs();

for (const [i, v] of [[0, 1], [1, 2], [2, 3]]) {
  const {done, value: [index, value]}  = iter.next();
  assert.sameValue(done, false);
  assert.sameValue(index, i);
  assert.sameValue(value, v);
}

assert.sameValue(iter.next().done, true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
