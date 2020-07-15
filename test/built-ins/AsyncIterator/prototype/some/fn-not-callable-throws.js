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

function check(fn) {
  gen().some(fn).then(
    () => {
      throw new Error('every should have thrown');
    },
    err => {
      assert.sameValue(err instanceof TypeError, true);
    }
  );
}

check();
check(undefined);
check(null);
check(0);
check(false);
check('');
check(Symbol(''));
check({});

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
