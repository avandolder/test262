// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

/*---
  `name` property of Iterator.prototype.every.
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype.every, 'name');
assert.sameValue(propDesc.value, 'every');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
