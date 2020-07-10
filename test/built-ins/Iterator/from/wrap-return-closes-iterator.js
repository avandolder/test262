// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
description: %WrapForValidIteratorPrototype%.return closes the source iterator.
info: |
  Iterator Helpers proposal
  2.1.3.3.1.1.2 %WrapForValidIteratorPrototype%.return ( v )

  1. Let O be this value.
  2. RequireInternalSlot(O, [[Iterated]]).
  3. Let result be ? IteratorClose(O.[[Iterated]], NormalCompletion(v)).
  4. Return CreateIterResultObject(result, true).

features: [iterator-helpers]
---*/

class TestIterator {
  next() {
    if (this.closed)
      return { done: true, value: undefined };
    return { done: false, value: 0 };
  }

  return(value) {
    this.closed = true;
    return { done: true, value };
  }
}

const iter = new TestIterator();
const wrap = Iterator.from(iter);
assert.sameValue(iter.closed, undefined);

let result = wrap.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 0);

result = wrap.return(1);
assert.sameValue(result.done, true);
assert.sameValue(result.value, 1);

assert.sameValue(iter.closed, true);
result = wrap.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
