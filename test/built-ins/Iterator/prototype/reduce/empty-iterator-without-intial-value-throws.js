// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Passing an empty iterator without an initial value throws a TypeError.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  ...
  3. If initialValue is not present, then
    a. Let next be ? IteratorStep(iterated).
    b. If next is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

const iter = [].values();
assert.throws(TypeError, () => iter.reduce((x, y) => x + y));



