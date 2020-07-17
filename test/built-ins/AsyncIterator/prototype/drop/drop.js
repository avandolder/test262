// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of drop.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

(async () => {
  let iter = gen().drop(1);

  for (const v of [2, 3]) { 
    const {done, value} = await iter.next();
    assert.sameValue(done, false);
    assert.sameValue(value, v);
  }

  const {done} = await iter.next();
  assert.sameValue(done, true);
})().then($DONE, $DONE);



