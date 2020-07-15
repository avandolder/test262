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
  yield 3;
  yield 5;
}
const fn = x => x % 2 == 0;
async function* empty() {}

(async () => {
  await gen().find(fn).then(result => assert.sameValue(result, undefined));

  await empty().find(x => x).then(result => assert.sameValue(result, undefined));
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
