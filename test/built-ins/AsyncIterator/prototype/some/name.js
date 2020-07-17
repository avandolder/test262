// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `name` property of AsyncIterator.prototype.some.
info: _
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.some, 'name');
assert.sameValue(propDesc.value, 'some');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);
