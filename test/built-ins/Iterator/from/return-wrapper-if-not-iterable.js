// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from returns an iterator wrapper if O is not an iterable.
info: |
  Iterator Helpers proposal 2.1.3.3.1 Iterator.from ( O )
  1. Let usingIterator be ? GetMethod(O, @@iterator).
  2. If usingIterator is not undefined,
  [...]
  3. Else, Let iteratorRecord be ? GetIteratorDirect(O).
  4. Let wrapper be ! ObjectCreate(%WrapForValidIteratorPrototype%, « [[Iterated]] »).
  5. Set wrapper.[[Iterated]] to iteratorRecord.
  6. Return wrapper.

features: [iterator-helpers]
---*/

class TestIterator {
  next() {
    return { done: false, value: 0 };
  }
}

const iter = new TestIterator();
assert.sameValue(
  Symbol.iterator in iter,
  false,
  'iter is not an iterable.'
);

const wrapper = Iterator.from(iter);
assert.sameValue(iter !== wrapper, true);
assert.sameValue(
  Symbol.iterator in wrapper,
  true,
  'wrapper is an iterable.'
);



