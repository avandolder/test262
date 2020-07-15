// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/


async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let iter = gen().take(2);

for (const v of [1, 2]) {
  iter.next().then(
    ({done, value}) => {
      assert.sameValue(done, false);
      assert.sameValue(value, v);
    }
  );
}

iter.next().then(({done}) => assert.sameValue(done, true));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
