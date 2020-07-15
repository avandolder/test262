// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

const log = [];
async function* gen(n) {
  log.push(`${n}`);
  yield 1;
  log.push(`${n}`);
  yield 2;
}

Promise.all([gen(1).forEach(() => {}), gen(2).forEach(() => {})]).then(
  () => {
    assert.sameValue(
      log.join(' '),
      '1 2 1 2',
    );
  },
  err => {
    throw err;
  }
).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
