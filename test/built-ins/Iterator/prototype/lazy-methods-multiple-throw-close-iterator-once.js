// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Calling `.throw()` on a lazy %Iterator.prototype% method multiple times closes the source iterator once.
info: >
  Iterator Helpers proposal 2.1.5
features: [iterator-helpers]
---*/

class TestError extends Error {}

class TestIterator extends Iterator {
  next() { 
    return {done: false, value: 1};
  }

  closeCount = 0;
  return(value) {
    this.closeCount++;
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

// Call `throw` after stepping the iterator once:
for (const method of methods) {
  const iter = new TestIterator();
  const iterHelper = method(iter);
  iterHelper.next();

  assert.sameValue(iter.closeCount, 0);
  assert.throws(TestError, () => iterHelper.throw(new TestError()));
  assert.sameValue(iter.closeCount, 1);
  assert.throws(TestError, () => iterHelper.throw(new TestError()));
  assert.sameValue(iter.closeCount, 1);
}

// Call `throw` before stepping the iterator:
for (const method of methods) {
  const iter = new TestIterator();
  const iterHelper = method(iter);

  assert.sameValue(iter.closeCount, 0);
  assert.throws(TestError, () => iterHelper.throw(new TestError()));
  assert.sameValue(iter.closeCount, 1);
  assert.throws(TestError, () => iterHelper.throw(new TestError()));
  assert.sameValue(iter.closeCount, 1);
}



