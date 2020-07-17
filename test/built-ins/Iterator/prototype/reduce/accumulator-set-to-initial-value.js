// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If present, set the accumulator to the initial value.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  ...
  3. If initialValue is not present, then
  4. Else,
    a. Let accumulator be initialValue.
features: [iterator-helpers]
---*/

const reducer = (acc, value) => acc;
const iterator = [1, 2, 3].values();

assert.sameValue(iterator.reduce(reducer, 0), 0);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
