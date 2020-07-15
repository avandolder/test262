// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(value) {
  yield value;
}
async function check(value, expected) {
  const result = await gen(value).every(x => x);
  assert.sameValue(result, expected);
}

(async () => {
  check(true, true);
  check(1, true);
  check([], true);
  check({}, true);
  check('test', true);

  check(false, false);
  check(0, false);
  check('', false);
  check(null, false);
  check(undefined, false);
  check(NaN, false);
  check(-0, false);
  check(0n, false);
  check(createIsHTMLDDA(), false);
  check(Promise.resolve(false), false);
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
