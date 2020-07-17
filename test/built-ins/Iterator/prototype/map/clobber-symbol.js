// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %Iterator.prototype%.map works even if the global Symbol has been clobbered..
info: _
features: [iterator-helpers]
---*/

Symbol = undefined;
assert.throws(TypeError, () => Symbol.iterator);

const iterator = [0].values();
assert.sameValue(
  iterator.map(x => x + 1).next().value, 1,
  '`%Iterator.prototype%.map` still works after Symbol has been clobbered'
);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
