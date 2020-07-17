// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: pending
description: %Iterator.prototype%.asIndexedPairs.name value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
features: [iterator-helpers]
---*/

assert.sameValue(Iterator.prototype.asIndexedPairs.name, 'asIndexedPairs');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(Iterator.prototype.asIndexedPairs, 'name');
assert.sameValue(propertyDescriptor.value, 'asIndexedPairs');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);



