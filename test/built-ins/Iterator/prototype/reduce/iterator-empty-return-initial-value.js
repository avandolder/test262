// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: When the iterator is empty, return the initial value.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  ...
  3. If initialValue is not present, then
  4. Else,
    a. Let accumulator be initialValue.
  5. Repeat,
    a. Let next be ? IteratorStep(iterated).
    b. If next is false, return accumulator.
features: [iterator-helpers]
---*/

const reducer = (x, y) => 0;
const iterator = [].values();

assert.sameValue(iterator.reduce(reducer, 1), 1);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
