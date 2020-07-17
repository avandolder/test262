// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Passing an empty iterator without an initial value throws a TypeError.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {}
gen().reduce((x, y) => x + y).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof TypeError, true);
}).then($DONE, $DONE);



