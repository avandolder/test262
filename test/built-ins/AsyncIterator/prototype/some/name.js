// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

/*---
  `name` property of AsyncIterator.prototype.some.
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.some, 'name');
assert.sameValue(propDesc.value, 'some');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
