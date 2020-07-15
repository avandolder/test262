// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

class TestAsyncIterator extends AsyncIterator {
  async next(value) { 
    return {done: false, value};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => true),
  iter => iter.take(2),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
];

(async () => {
  for (const method of methods) {
    const iterator = new TestAsyncIterator();
    const iteratorHelper = method(iterator);
    await iteratorHelper.next();
    const {done, value} = await iteratorHelper.next('last value');
    assert.sameValue(done, false);
    // Unwrap the return value from asIndexedPairs.
    assert.sameValue(Array.isArray(value) ? value[1] : value, 'last value');
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);

