// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %AsyncIterator.prototype%.flatMap innerIterator can be a generator.
info: >
  Iterator Helpers proposal 2.1.6.7
flags: [async]
features: [iterator-helpers]
---*/

async function* gen() {
  yield 1;
  yield 2;
}

(async () => {
  const iter = gen().flatMap(async function*(x) {
    yield x;
    yield* [x + 1, x + 2];
  });

  for (const expected of [1, 2, 3, 2, 3, 4]) {
    const result = await iter.next();
    assert.sameValue(result.value, expected);
    assert.sameValue(result.done, false);
  }

  const result = await iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
})().then($DONE, $DONE);



