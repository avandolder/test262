// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Eagerly throw TypeError when `this` is not an iterator.
info: |
  2.1.4.2 %Iterator.prototype%.map ( mapper )
  1. Let iterated be ? GetIteratorDirect(this value).

  1.1.1 GetIteratorDirect ( obj )
  1. If Type(obj) is not Object, throw a TypeError exception.
  2. Let nextMethod be ? GetV(obj, "next").
  3. If IsCallable(nextMethod) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

const mapper = (x) => x;

assert.throws(TypeError, () => Iterator.prototype.map.call(undefined, mapper));
assert.throws(TypeError, () => Iterator.prototype.map.call(null, mapper));
assert.throws(TypeError, () => Iterator.prototype.map.call(0, mapper));
assert.throws(TypeError, () => Iterator.prototype.map.call(false, mapper));
assert.throws(TypeError, () => Iterator.prototype.map.call({}, mapper));
assert.throws(TypeError, () => Iterator.prototype.map.call('', mapper));
assert.throws(TypeError, () => Iterator.prototype.map.call(new Symbol(''), mapper));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
