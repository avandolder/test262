// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

const reducer = (x, y) => 0;
async function *gen() {}

gen().reduce(reducer, 1).then(result => assert.sameValue(result, 1)).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
