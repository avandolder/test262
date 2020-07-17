// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `name` property of Iterator.from.
info: |
    ES6 Section 17:

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(Iterator.from, 'name');
assert.sameValue(propDesc.value, 'from');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);



