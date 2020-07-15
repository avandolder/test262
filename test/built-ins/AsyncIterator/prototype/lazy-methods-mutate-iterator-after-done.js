// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %AsyncIterator.prototype% methods ignore iterator mutation if already done.
info: >
  Iterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  values = [1, 2];
  async next() {
    if (this.values.length == 0)
      return {done: true};
    return {done: false, value: this.values.shift()};
  }
}

function check({done, value}, expectedDone, expectedValue) {
  assert.sameValue(done, expectedDone);
  assert.sameValue(Array.isArray(value) ? value[1] : value, expectedValue);
}

const methods = [
  ['map', x => x],
  ['filter', x => true],
  ['take', Infinity],
  ['drop', 0],
  ['asIndexedPairs', undefined],
  ['flatMap', async function*(x) { yield x; }],
];

(async () => {
  for (const [method, arg] of methods) {
    const iter = new TestIterator();
    const iterHelper = iter[method](arg);
    check(await iterHelper.next(), false, 1);
    check(await iterHelper.next(), false, 2);
    check(await iterHelper.next(), true, undefined);
    iter.values.push(3);
    check(await iterHelper.next(), true, undefined);
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
