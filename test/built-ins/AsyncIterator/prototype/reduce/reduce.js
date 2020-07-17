// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of reduce
info: _
flags: [async]
features: [iterator-helpers]
---*/

const reducer = (acc, value) => acc + value;
async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen().reduce(reducer, 0).then(result => assert.sameValue(result, 6)).then($DONE, $DONE);



