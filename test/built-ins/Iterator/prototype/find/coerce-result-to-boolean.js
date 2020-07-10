// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

const fn = (value) => value;
assert.sameValue([true].values().find(fn), true);
assert.sameValue([1].values().find(fn), 1);
assert.sameValue(['test'].values().find(fn), 'test');

assert.sameValue([false].values().find(fn), undefined);
assert.sameValue([0].values().find(fn), undefined);
assert.sameValue([''].values().find(fn), undefined);
assert.sameValue([null].values().find(fn), undefined);
assert.sameValue([undefined].values().find(fn), undefined);
assert.sameValue([NaN].values().find(fn), undefined);
assert.sameValue([-0].values().find(fn), undefined);
assert.sameValue([0n].values().find(fn), undefined);

let array = [];
assert.sameValue([array].values().find(fn), array);

let object = {};
assert.sameValue([object].values().find(fn), object);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
