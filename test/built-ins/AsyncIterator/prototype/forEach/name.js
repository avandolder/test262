// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `name` property of AsyncIterator.prototype.forEach.
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.forEach, 'name');
assert.sameValue(propDesc.value, 'forEach');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);



