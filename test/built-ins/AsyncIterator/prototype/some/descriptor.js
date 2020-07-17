// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Descriptor property of AsyncIterator.prototype.some
info: _
flags: [async]
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype, 'some');
assert.sameValue(typeof propDesc.value, 'function');
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);
