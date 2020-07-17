// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from returns O if it is iterable, an iterator, and an instance of Iterator.
info: |
  Iterator Helpers proposal 2.1.3.3.1 Iterator.from ( O )
  1. Let usingIterator be ? GetMethod(O, @@iterator).
  2. If usingIterator is not undefined,
    a. Let iteratorRecord be ? GetIterator(O, sync, usingIterator).
    b. Let hasInstance be ? OrdinaryHasInstance(%Iterator%, iteratorRecord.[[Iterator]]).
    c. If hasInstance is true, then
      i. Return iteratorRecord.[[Iterator]].

features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  value = 0;
  next() {
    return { done: false, value: this.value++ };
  }
}

const iter = new TestIterator();
assert.sameValue(iter, Iterator.from(iter));

const arrayIter = [1, 2, 3][Symbol.iterator]();
assert.sameValue(arrayIter, Iterator.from(arrayIter));



