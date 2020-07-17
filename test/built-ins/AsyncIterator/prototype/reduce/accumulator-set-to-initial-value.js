// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If present, set the accumulator to the initial value.
info: _
flags: [async]
features: [iterator-helpers]
---*/

const reducer = (acc, _) => acc;
async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

gen().reduce(reducer, 0).then(value => assert.sameValue(value, 0)).then($DONE, $DONE);



