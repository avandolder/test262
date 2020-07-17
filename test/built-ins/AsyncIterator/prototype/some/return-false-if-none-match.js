// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Return false if no value matches the predicate.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 3;
  yield 5;
}
const fn = x => x % 2 == 0;

gen().some(fn).then(result => assert.sameValue(result, false)).then($DONE, $DONE);

async function* empty() {}
empty().some(x => x).then(result => assert.sameValue(result, false)).then($DONE, $DONE);
