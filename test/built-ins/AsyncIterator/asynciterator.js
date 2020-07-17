// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Property descriptor of AsyncIterator.
features: [iterator-helpers]
---*/

const propDesc = Reflect.getOwnPropertyDescriptor(this, 'AsyncIterator');
assert.sameValue(propDesc.value, AsyncIterator);
assert.sameValue(propDesc.writable, true);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, true);



