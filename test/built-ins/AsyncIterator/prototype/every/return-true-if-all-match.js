// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Return true if all values match the predicate.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 3;
  yield 5;
}
const fn = x => x % 2 == 1;

(async () => {
  assert.sameValue(await gen().every(fn), true);

  async function* empty() {}
  assert.sameValue(await empty().every(x => x), true);
})().then($DONE, $DONE);



