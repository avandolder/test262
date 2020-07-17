// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy methods pass last value through when chained
info: _
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
  for (const outerMethod of methods) {
    for (const innerMethod of methods) {
      const iterator = new TestAsyncIterator();
      const iteratorChain = outerMethod(innerMethod(iterator));
      await iteratorChain.next();
      let {done, value} = await iteratorChain.next('last value');
      assert.sameValue(done, false);
      // Unwrap the asIndexedPair return values.
      while (Array.isArray(value)) {
        value = value[1];
      }
      assert.sameValue(value, 'last value');
    }
  }
})().then($DONE, $DONE);




