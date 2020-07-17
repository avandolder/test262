// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of forEach
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(values) {
  yield* values;
}

(async () => {
  const log = [];
  const fn = x => log.push(x);
  const iter = gen([1, 2, 3]);

  assert.sameValue(await iter.forEach(fn), undefined);
  assert.sameValue(log.join(','), '1,2,3');
})().then($DONE, $DONE);



