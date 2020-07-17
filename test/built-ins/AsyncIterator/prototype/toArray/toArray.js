// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Smoke test of toArray
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
assert.sameValue(Array.isArray(gen()), false);

gen().toArray().then(array => {
  assert.sameValue(Array.isArray(array), true);
  assert.sameValue(array.length, 3);

  const expected = [1, 2, 3];
  for (const item of array) {
    const expect = expected.shift();
    assert.sameValue(item, expect);
  }
}).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
