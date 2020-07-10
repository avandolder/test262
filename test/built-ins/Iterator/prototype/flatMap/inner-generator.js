// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


//
//
/*---
esid: pending
description: %Iterator.prototype%.flatMap innerIterator can be a generator.
info: >
  Iterator Helpers proposal 2.1.5.7
features: [iterator-helpers]
---*/

const iter = [1, 2].values().flatMap(function*(x) {
  yield x;
  yield* [x + 1, x + 2];
});

for (const expected of [1, 2, 3, 2, 3, 4]) {
  const result = iter.next();
  assert.sameValue(result.value, expected);
  assert.sameValue(result.done, false);
}

const result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
