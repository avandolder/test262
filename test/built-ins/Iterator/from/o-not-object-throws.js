// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from throws when called with a non-object.
info: |
  Iterator Helpers proposal 2.1.3.3.1 Iterator.from ( O )
  1. Let usingIterator be ? GetMethod(O, @@iterator).

features: [iterator-helpers]
---*/

assert.throws(TypeError, () => Iterator.from(undefined));
assert.throws(TypeError, () => Iterator.from(null));
assert.throws(TypeError, () => Iterator.from(0));
assert.throws(TypeError, () => Iterator.from(false));
assert.throws(TypeError, () => Iterator.from(Symbol('')));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
