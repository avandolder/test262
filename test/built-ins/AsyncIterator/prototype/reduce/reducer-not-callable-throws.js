// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If reducer throws, the iterator is closed.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function *gen() {}

function check(fn) {
  gen().reduce(fn).then(() => {
    throw new Error('every should have thrown');
  },
  err => {
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



