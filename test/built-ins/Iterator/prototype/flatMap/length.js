// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: pending
description: %Iterator.prototype%.flatMap length value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [iterator-helpers]
---*/

assert.sameValue(Iterator.prototype.flatMap.length, 1);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.flatMap, 'length');
assert.sameValue(propertyDescriptor.value, 1);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
