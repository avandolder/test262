// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Iterator.from throws when called with an object with a non-callable @@iterator property.
info: |
  Iterator Helpers proposal 2.1.3.3.1 Iterator.from(O)

  1. Let usingIterator be ? GetMethod(), @@iterator).

features: [iterator-helpers, Symbol.iterator]
---*/

assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: 0 }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: false }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: "" }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: {} }));
assert.throws(TypeError, () => Iterator.from({ [Symbol.iterator]: new Symbol('') }));
