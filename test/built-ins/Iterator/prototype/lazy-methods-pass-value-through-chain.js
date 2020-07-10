// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Chained %IteratorHelper% objects pass the value from next to the source iterator.
info: |
  Iterator Helpers proposal 2.1.5.2-2.1.5.6
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next(value) {
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

for (const outerMethod of methods) {
  for (const innerMethod of methods) {
    const iterator = new TestIterator();
    const iteratorChain = outerMethod(innerMethod(iterator));
    iteratorChain.next();
    let result = iteratorChain.next('last value');
    assert.sameValue(result.done, false);
    // Unwrap the asIndexedPair return values.
    while (Array.isArray(result.value)) {
      result.value = result.value[1];
    }
    assert.sameValue(result.value, 'last value');
  }
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
