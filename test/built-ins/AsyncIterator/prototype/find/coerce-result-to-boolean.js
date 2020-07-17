// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Result of fn is coerced to a boolean.
info: _
flags: [async]
features: [iterator-helpers, IsHTMLDDA]
---*/

async function* gen(value) {
  yield value;
}
async function check(value, expected) {
  const result = await gen(value).find(x => x);
  assert.sameValue(result, expected);
}

(async () => {
  check(true, true);
  check(1, 1);
  check('test', 'test');

  check(false, undefined);
  check(0, undefined);
  check('', undefined);
  check(null, undefined);
  check(undefined, undefined);
  check(NaN, undefined);
  check(-0, undefined);
  check(0n, undefined);
  check(Promise.resolve(false), undefined);

  let array = [];
  check(array, array);

  let object = {};
  check(object, object);

  const htmlDDA = $262.IsHTMLDDA; 
  check(htmlDDA, undefined);
})().then($DONE, $DONE);



