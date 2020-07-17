// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: _
info: _
features: [iterator-helpers]
---*/

const otherGlobal = $262.createRealm().global;

let array = [1, 2, 3].values().toArray();
assert.sameValue(array instanceof Array, true);
assert.sameValue(array instanceof otherGlobal.Array, false);

array = otherGlobal.Iterator.prototype.toArray.call([1, 2, 3].values());
assert.sameValue(array instanceof Array, false);
assert.sameValue(array instanceof otherGlobal.Array, true);



