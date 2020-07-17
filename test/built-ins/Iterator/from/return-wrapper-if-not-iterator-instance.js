// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from returns an iterator wrapper if O is not an instance of Iterator.
info: |
  Iterator Helpers proposal 2.1.3.3.1 Iterator.from ( O )
  1. Let usingIterator be ? GetMethod(O, @@iterator).
  2. If usingIterator is not undefined,
    a. Let iteratorRecord be ? GetIterator(O, sync, usingIterator).
    b. Let hasInstance be ? OrdinaryHasInstance(%Iterator%, iteratorRecord.[[Iterator]]).
    c. If hasInstance is true, then
  [...]
  4. Let wrapper be ! ObjectCreate(%WrapForValidIteratorPrototype%, « [[Iterated]] »).
  5. Set wrapper.[[Iterated]] to iteratorRecord.
  6. Return wrapper.

features: [iterator-helpers]
---*/

class TestIterator {
  [Symbol.iterator]() {
    return this;
  }

  next() {
    return { done: false, value: 0 };
  }
}

const iter = new TestIterator();
assert.sameValue(iter instanceof Iterator, false);

const wrapper = Iterator.from(iter);
assert.sameValue(iter !== wrapper, true);
assert.sameValue(wrapper instanceof Iterator, true);



