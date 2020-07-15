// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/


const otherGlobal = $262.createRealm().global;
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

async function *gen() {}

gen().some().then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof TypeError, true);
});

otherGlobal.AsyncIterator.prototype.some.call(gen()).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(
    err instanceof otherGlobal.TypeError,
    true,
    'TypeError comes from the realm of the method.',
  );
});

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
