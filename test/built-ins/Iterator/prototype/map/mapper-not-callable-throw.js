// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

//

/*---
esid: pending
description: Eagerly throw TypeError when `mapper` is not callable.
info:
features: [iterator-helpers]
---*/

assert.throws(TypeError, () => Iterator.prototype.map(undefined));
assert.throws(TypeError, () => [].values().map(undefined));

assert.throws(TypeError, () => Iterator.prototype.map(null));
assert.throws(TypeError, () => [].values().map(null));

assert.throws(TypeError, () => Iterator.prototype.map(0));
assert.throws(TypeError, () => [].values().map(0));

assert.throws(TypeError, () => Iterator.prototype.map(false));
assert.throws(TypeError, () => [].values().map(false));

assert.throws(TypeError, () => Iterator.prototype.map({}));
assert.throws(TypeError, () => [].values().map({}));

assert.throws(TypeError, () => Iterator.prototype.map(''));
assert.throws(TypeError, () => [].values().map(''));

assert.throws(TypeError, () => Iterator.prototype.map(Symbol('')));
assert.throws(TypeError, () => [].values().map(Symbol('')));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
