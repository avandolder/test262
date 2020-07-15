// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

const reducer = (acc, _) => acc;
async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen().reduce(reducer).then(result => assert.sameValue(result, 1)).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
