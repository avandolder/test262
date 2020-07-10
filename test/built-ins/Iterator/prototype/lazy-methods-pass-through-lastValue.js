// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterators from lazy %Iterator.prototype% methods pass the value from next to the source iterator.
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

for (const method of methods) {
  const iterator = new TestIterator();
  const iteratorHelper = method(iterator);
  iteratorHelper.next();
  let result = iteratorHelper.next('last value');
  assert.sameValue(result.done, false);
  // Array.isArray is used to make sure we unwrap asIndexedPairs results.
  assert.sameValue(Array.isArray(result.value) ? result.value[1] : result.value, 'last value');
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);

