// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: The prototype of the AsyncIterator constructor is the intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(AsyncIterator), Function.prototype);

const propDesc = Reflect.getOwnPropertyDescriptor(AsyncIterator, 'prototype');
assert.sameValue(propDesc.writable, false);
assert.sameValue(propDesc.enumerable, false);
assert.sameValue(propDesc.configurable, false);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
