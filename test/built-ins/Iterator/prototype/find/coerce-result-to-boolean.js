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

let array = [];
assert.sameValue([array].values().find(fn), array);

let object = {};
assert.sameValue([object].values().find(fn), object);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
