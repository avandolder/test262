// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Result of fn is coerced to a boolean.
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(iterable) {
  yield* iterable;
}

// All truthy values are kept.
const truthyValues = [true, 1, [], {}, 'test'];
// All falsy values are filtered out.
const falsyValues = [false, 0, '', null, undefined, NaN, -0, 0n, createIsHTMLDDA()];

(async () => {
  for await (const value of gen([...truthyValues]).filter(x => x)) {
    assert.sameValue(truthyValues.shift(), value);
  }

  const {done, value} = await gen(falsyValues).filter(x => x).next();
  assert.sameValue(done, true);
  assert.sameValue(value, undefined);
})().then($DONE, $DONE);



