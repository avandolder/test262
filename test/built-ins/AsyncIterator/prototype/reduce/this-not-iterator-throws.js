// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: _
info: _
flags: [async]
features: [iterator-helpers]
---*/

const sum = (x, y) => x + y;
function check(x) {
  AsyncIterator.prototype.reduce.call(x, sum).then(
    () => assert.sameValue(true, false, 'expected error'),
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



