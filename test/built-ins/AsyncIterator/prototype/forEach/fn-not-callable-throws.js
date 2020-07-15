// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function *gen() {}

function check(fn) {
  gen().forEach(fn).then(() => {
    throw new Error('every should have thrown');
  },
  (err) => {
    assert.sameValue(err instanceof TypeError, true);
  });
}

(async () => {
  await check();
  await check(undefined);
  await check(null);
  await check(0);
  await check(false);
  await check('');
  await check(Symbol(''));
  await check({});
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
