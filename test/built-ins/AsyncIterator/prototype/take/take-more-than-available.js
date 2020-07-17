// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %AsyncIterator.prototype%.take returns if the iterator is done.
info: >
  Iterator Helpers proposal 2.1.6.4
  2. Repeat,
    ...
    c. Let next be ? Await(? IteratorNext(iterated, lastValue)).
    d. If ? IteratorComplete(next) is false, return undefined.
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(values) {
  yield* values;
}

(async () => {
  const iter = gen([1, 2]).take(10);
  for (const expected of [1, 2]) {
    const result = await iter.next();
    assert.sameValue(result.value, expected);
    assert.sameValue(result.done, false);
  }
  const result = await iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
})();



