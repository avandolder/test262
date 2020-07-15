// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: pending
description: %AsyncIterator.prototype%.drop.name value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
features: [iterator-helpers]
---*/

assert.sameValue(AsyncIterator.prototype.drop.name, 'drop');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.drop, 'name');
assert.sameValue(propertyDescriptor.value, 'drop');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
