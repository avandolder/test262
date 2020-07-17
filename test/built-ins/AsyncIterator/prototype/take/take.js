// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of take.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let iter = gen().take(2);

(async () => {
  for (const v of [1, 2]) {
    const {done, value} = await iter.next();
    assert.sameValue(done, false);
    assert.sameValue(value, v);
  }

  await iter.next().then(({done}) => assert.sameValue(done, true));
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
