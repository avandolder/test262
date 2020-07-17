// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: _
info: _
flags: [async]
features: [iterator-helpers]
---*/

let x = {a: () => true};

async function* gen() {
  yield x.a();
  yield x.a();
}

gen().toArray().then(
  () => assert.sameValue(true, false, 'expected error'),
  err => assert.sameValue(err instanceof Error, true),
).then($DONE, $DONE);

x.a = () => {
  throw Error();
};
