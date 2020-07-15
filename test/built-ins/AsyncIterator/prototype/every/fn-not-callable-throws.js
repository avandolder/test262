// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function *gen() {
  yield 1;
}

async function check(fn) {
  try {
    await gen().every(fn);
    throw new Error('every should have thrown');
  } catch (err) {
    assert.sameValue(err instanceof TypeError, true);
  }
}

(async () => {
  check();
  check(undefined);
  check(null);
  check(0);
  check(false);
  check('');
  check(Symbol(''));
  check({});
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
