// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function check(x) {
  try {
    await AsyncIterator.prototype.every.call(x, x => x);
    throw new Error('check should have been rejected');
  } catch (err) {
    assert.sameValue(err instanceof TypeError, true);
  }
}

(async () => {
  check();
  check(undefined);
  check({});
  check({next: 0});
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
