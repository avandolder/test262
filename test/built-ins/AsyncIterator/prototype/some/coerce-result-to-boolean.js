// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Result of fn is coerced to a boolean.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(value) {
  yield value;
}
const fn = x => x;
function check(value, expected) {
  gen(value).some(fn).then(result => assert.sameValue(result, expected));
}

(async () => {
  await check(true, true);
  await check(1, true);
  await check([], true);
  await check({}, true);
  await check('test', true);
  await 
  await check(false, false);
  await check(0, false);
  await check('', false);
  await check(null, false);
  await check(undefined, false);
  await check(NaN, false);
  await check(-0, false);
  await check(0n, false);
  await check(createIsHTMLDDA(), false);
  await check(Promise.resolve(false), false);
})().then($DONE, $DONE);



