// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Return an empty array if given an empty iterator.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {}
gen().toArray().then(array => {
  assert.sameValue(Array.isArray(array), true);
  assert.sameValue(array.length, 0);
}).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
