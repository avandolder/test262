// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Calling `.throw()` on a lazy %Iterator.prototype% method closes the source iterator.
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
  return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(x => [x]),
];

for (const method of methods) {
  const iter = new TestIterator();
  const iterHelper = method(iter);

  assert.sameValue(iter.closed, false);
  assert.throws(TestError, () => iterHelper.throw(new TestError()));
  assert.sameValue(iter.closed, true);

  const result = iterHelper.next();
  assert.sameValue(result.done, true);
  assert.sameValue(result.value, undefined);
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
