// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/


const fn = x => x;
function check(x) {
  AsyncIterator.prototype.some.call(x, fn).then(
    () => assert.sameValue(true, false, 'expected error'),
    err => {
      assert.sameValue(err instanceof TypeError, true);
    }
  );
}

check();
check(undefined);
check({});
check({next: 0});

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
