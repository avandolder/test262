// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %WrapForValidIteratorPrototype%.throw calls the iterator's throw method, if available, otherwise throws the passed value.
info: |
  Iterator Helpers proposal
  2.1.3.3.1.1.3 %WrapForValidIteratorPrototype%.throw ( v )

  1. Let O be this value.
  2. RequireInternalSlot(O, [[Iterated]]).
  3. Let iterator be O.[[Iterated]].[[Iterator]].
  4. Let throw be ? GetMethod(iterator, "throw").
  5. If throw is undefined, return ThrowCompletion(v).
  6. Otherwise, return ? Call(throw, iterator, « v »).


features: [iterator-helpers]
---*/

class Iter {
  next() {
    return { done: false, value: 0 };
  }
}

const iter = new Iter();
const wrap = Iterator.from(iter);

assert.throws(Error, () => wrap.throw(new Error()));
assertThrows(() => wrap.throw());
assertThrows(() => wrap.throw(1));

class IterThrowNull {
  next() {
    return { done: false, value: 0 };
  }
  throw = null;
}

const iterNull = new IterThrowNull();
const wrapNull = Iterator.from(iter);

assert.throws(Error, () => wrapNull.throw(new Error()));
assertThrows(() => wrapNull.throw());
assertThrows(() => wrapNull.throw(1));

class IterWithThrow {
  next() {
    return { done: false, value: 0 };
  }

  throw(value) {
    return value;
  }
}

const iterWithThrow = new IterWithThrow();
const wrapWithThrow = Iterator.from(iterWithThrow);

assert.sameValue(wrapWithThrow.throw(1), 1);



