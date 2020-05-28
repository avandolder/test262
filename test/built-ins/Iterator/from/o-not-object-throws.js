// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Iterator.from throws when called with a non-object.
info: |
features: [iterator-helpers]
---*/

assert.throws(TypeError, () => Iterator.from(undefined));
assert.throws(TypeError, () => Iterator.from(null));
assert.throws(TypeError, () => Iterator.from(0));
assert.throws(TypeError, () => Iterator.from(false));
assert.throws(TypeError, () => Iterator.from(''));
assert.throws(TypeError, () => Iterator.from(new Symbol('')));
