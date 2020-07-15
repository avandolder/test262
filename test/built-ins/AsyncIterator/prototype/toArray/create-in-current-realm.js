// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/


const otherGlobal = $262.createRealm().global;

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen().toArray().then(array => {
  assert.sameValue(array instanceof Array, true);
  assert.sameValue(array instanceof otherGlobal.Array, false);
});

otherGlobal.AsyncIterator.prototype.toArray.call(gen()).then(array => {
  assert.sameValue(array instanceof Array, false);
  assert.sameValue(array instanceof otherGlobal.Array, true);
});

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
