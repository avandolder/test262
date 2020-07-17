// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If no initial value is passed, set the accumulator to the first value of the iterator.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  ...
  3. If initialValue is not present, then
    a. Let next be ? IteratorStep(iterated).
    b. If next is false, throw a TypeError exception.
    c. Let accumulator be ? IteratorValue(next).
features: [iterator-helpers]
---*/

const reducer = (acc, value) => acc;
const iterator = [1, 2, 3].values();

assert.sameValue(iterator.reduce(reducer), 1);



