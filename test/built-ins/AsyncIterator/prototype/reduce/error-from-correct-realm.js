// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Errors thrown should come from the correct realm.
info: _
flags: [async]
features: [iterator-helpers]
---*/

const otherGlobal = $262.createRealm().global;
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

async function *gen() {}

otherGlobal.AsyncIterator.prototype.reduce.call(gen()).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(
    err instanceof otherGlobal.TypeError,
    true,
    'TypeError comes from the realm of the method.',
  );
}).then($DONE, $DONE);



