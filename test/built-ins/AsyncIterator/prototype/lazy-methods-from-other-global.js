// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(values) {
  yield* values;
}

const otherAsyncIteratorProto = $262.createRealm().global.AsyncIterator.prototype;

const methods = [
  ["map", x => x],
  ["filter", x => true],
  ["take", Infinity],
  ["drop", 0],
  ["asIndexedPairs", undefined],
  ["flatMap", x => gen([x])],
];

(async () => {
  for (const [method, arg] of methods) {
    const iterator = gen([1, 2, 3]);
    const helper = otherAsyncIteratorProto[method].call(iterator, arg);

    for (const expected of [1, 2, 3]) {
      const {done, value} = await helper.next();
      assert.sameValue(done, false);
      assert.sameValue(Array.isArray(value) ? value[1] : value, expected);
    }

    const {done, value} = await helper.next();
    assert.sameValue(done, true);
    assert.sameValue(value, undefined);
  }
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
