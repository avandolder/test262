// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of map.
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
  const iter = gen().map(x => x**2);

  for (const v of [1, 4, 9]) {
    await iter.next().then(
      ({done, value}) => {
        assert.sameValue(done, false);
        assert.sameValue(value, v);
      }
    );
  }

  await iter.next().then(({done}) => assert.sameValue(done, true));
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
