// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Errors thrown from %Iterator.prototype%.reduce come from the realm of the method.
info: >
  Iterator Helpers proposal 2.1.5.8
features: [cross-realm, iterator-helpers]
---*/

const otherGlobal = $262.createRealm().global;
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

const iter = [].values();

assert.throws(TypeError, () => iter.reduce());
assert.throws(
  otherGlobal.TypeError,
  otherGlobal.Iterator.prototype.reduce.bind(iter),
  'TypeError comes from the realm of the method.',
);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
