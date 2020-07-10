// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %WrapForValidIteratorPrototype%.next forwards passed values to the source iterator.
info: |
  Iterator Helpers proposal 
  2.1.3.3.1.1.1 %WrapForValidIteratorPrototype%.next ( value )

  1. Let O be this value.
  2. RequireInternalSlot(O, [[Iterated]]).
  3. If value is not present, then
    a. Return ? IteratorNext(O.[[Iterated]]).
  4. Else,
    b. Return ? IteratorNext(O.[[Iterated]], value).

features: [iterator-helpers]
---*/

class Iter {
  next(value) {
    this.v = value;
    return { done: false, value };
  }
}

const iter = new Iter();
const wrap = Iterator.from(iter);
assert.sameValue(iter !== wrap, true);

assert.sameValue(iter.v, undefined);
wrap.next(1);
assert.sameValue(iter.v, 1);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
