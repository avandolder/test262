// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `name` property of AsyncIterator.prototype.toArray.
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.toArray, 'name');
assert.sameValue(propDesc.value, 'toArray');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);



