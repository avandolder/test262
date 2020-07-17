// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Short circuit on fn returning true.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const log = [];
const fn = (value) => {
  log.push(value.toString());
  return value % 2 == 0;
};

gen().find(fn).then(result => {
  assert.sameValue(result, 2);
  assert.sameValue(log.join(','), '1,2');
}).then($DONE, $DONE);



