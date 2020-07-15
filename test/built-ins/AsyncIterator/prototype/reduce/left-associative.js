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

(async () => {
  let result = await gen().reduce((x, y) => `(${x}+${y})`, 0);
  assert.sameValue(result, '(((0+1)+2)+3)');
  result = await gen().reduce((x, y) => `(${x}+${y})`)
  assert.sameValue(result, '((1+2)+3)');
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
