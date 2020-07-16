// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %Iterator.prototype% methods close the iterator if `yield` throws.
info: >
  Iterator Helpers proposal 2.1.5
features: [iterator-helpers]
---*/

class TestError extends Error {}
class TestIterator extends Iterator {
  next() { 
    return {done: false, value: 1};
  }

  closed = false;
  return() {
    this.closed = true;
    return {done: true};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => true),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(x => [x]),
];

for (const method of methods) {
  const iterator = new TestIterator();
  assert.sameValue(iterator.closed, false);
  const iteratorHelper = method(iterator);
  iteratorHelper.next();
  assert.throws(TestError, () => iteratorHelper.throw(new TestError()));
  assert.sameValue(iterator.closed, true); 
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
