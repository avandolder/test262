// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Throw if this is not an iterator.
info: _
flags: [async]
features: [iterator-helpers]
---*/

function check(x) {
  AsyncIterator.prototype.toArray.call(x).then(
    () => {
      throw new Error('check should have been rejected');
    },
    err => {
      assert.sameValue(err instanceof TypeError, true);
    }
  );
}

(async () => {
  await check();
  await check(undefined);
  await check({});
  await check({next: 0});
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
