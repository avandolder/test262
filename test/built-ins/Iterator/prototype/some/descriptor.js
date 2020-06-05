// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

/*---
  Descriptor property of Iterator.prototype.some
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype, 'some');
assert.sameValue(typeof propDesc.value, 'function');
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
