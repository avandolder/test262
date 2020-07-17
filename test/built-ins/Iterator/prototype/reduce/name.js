// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `name` property of Iterator.prototype.reduce.
info: _
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.prototype.reduce, 'name');
assert.sameValue(propDesc.value, 'reduce');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);



