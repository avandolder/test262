// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  The `length` property of Iterator.from.
info: |
  ES7 section 17: Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(Iterator.from.length, 1);

verifyNotEnumerable(Iterator.from, 'length');
verifyNotWritable(Iterator.from, 'length');
verifyConfigurable(Iterator.from, 'length');
