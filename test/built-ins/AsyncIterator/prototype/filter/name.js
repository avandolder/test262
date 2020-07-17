// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %AsyncIterator.prototype%.filter.name value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
features: [iterator-helpers]
---*/

assert.sameValue(AsyncIterator.prototype.filter.name, 'filter');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.filter, 'name');
assert.sameValue(propertyDescriptor.value, 'filter');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);



