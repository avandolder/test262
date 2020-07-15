// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: pending
description: %AsyncIterator.prototype%.drop length value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
---*/

assert.sameValue(AsyncIterator.prototype.drop.length, 1);

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.drop, 'length');
assert.sameValue(propertyDescriptor.value, 1);
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
