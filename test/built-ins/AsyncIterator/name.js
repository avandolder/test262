// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: The "name" property of AsyncIterator
features: [iterator-helpers]
---*/

/*---
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator, 'name');
assert.sameValue(propDesc.value, 'AsyncIterator');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);



