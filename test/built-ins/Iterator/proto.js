// Copyright (C) 2020 . All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  The prototype of the Iterator constructor is the intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator), Function.prototype);

verifyNotEnumerable(Iterator, 'prototype');
verifyNotWritable(Iterator, 'prototype');
verifyNotConfigurable(Iterator, 'prototype');
