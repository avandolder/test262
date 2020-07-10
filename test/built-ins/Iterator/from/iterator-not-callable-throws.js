// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from throws when called with an object with a non-callable @@iterator property.
info: |
  Iterator Helpers proposal 2.1.3.3.1

  2.1.3.3.1 Iterator.from ( O )
  1. Let usingIterator be ? GetMethod(O, @@iterator).
  2. If usingIterator is not undefined,
    a. Let iteratorRecord be ? GetIterator(O, sync, usingIterator).

  7.4.1 GetIterator ( obj [ , hint [ , method ] ] )
  [...]
  4. Let iterator be ? Call(method, obj).
features: [iterator-helpers, Symbol.iterator]
---*/

assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: 0 }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: false }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: "" }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: {} }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: Symbol('') }));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
