// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If fn is not callable, throw a TypeError.
info: _
features: [iterator-helpers]
---*/


const iter = [].values();

assert.throws(TypeError, () => iter.forEach());
assert.throws(TypeError, () => iter.forEach(undefined));
assert.throws(TypeError, () => iter.forEach(null));
assert.throws(TypeError, () => iter.forEach(0));
assert.throws(TypeError, () => iter.forEach(false));
assert.throws(TypeError, () => iter.forEach(''));
assert.throws(TypeError, () => iter.forEach(Symbol('')));
assert.throws(TypeError, () => iter.forEach({}));



