// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `take` and `drop` throw eagerly when passed negative numbers, after rounding towards 0.
info: >
  Iterator Helpers proposal 2.1.5.4 and 2.1.5.5
features: [iterator-helpers]
---*/

const iter = [].values();
const methods = [
  value => iter.take(value),
  value => iter.drop(value),
];

for (const method of methods) {
  assert.throws(RangeError, () => method(-1));
  assert.throws(RangeError, () => method(-Infinity));

  method(NaN);
  method(-NaN);
  method(-0);
  method(-0.9);
}



