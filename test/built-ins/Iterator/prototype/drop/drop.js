// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: pending
description: Smoketest of %Iterator.prototype%.drop.
info: >
  Iterator Helpers proposal 2.1.5.5
features: [iterator-helpers]
---*/

let iter = [1, 2, 3].values().drop(1);

for (const v of [2, 3]) {
  let result = iter.next();
  assert.sameValue(result.done, false);
  assert.sameValue(result.value, v);
}

assert.sameValue(iter.next().done, true);

// `drop`, when called without arguments, has a limit of undefined,
// which converts to 0.
assert.sameValue(['test'].values().drop().next().value, 'test');



