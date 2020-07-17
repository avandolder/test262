// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Errors thrown from %Iterator.prototype%.some come from the realm of the method.
info: >
  Iterator Helpers proposal 2.1.5.11
features: [cross-realm, iterator-helpers]
---*/

const otherGlobal = $262.createRealm().global;
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

const iter = [].values();

assert.throws(TypeError, () => iter.some());
assert.throws(
  otherGlobal.TypeError,
  otherGlobal.Iterator.prototype.some.bind(iter),
  'TypeError comes from the realm of the method.',
);



