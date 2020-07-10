// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `every` returns true if all values match the predicate.
info: |
  2.1.5.12 %Iterator.prototype%.every ( fn )
  3. Repeat,
    a. Let next be ? IteratorStep(iterated).
    b. If next is false, return true.
    c. Let value be ? IteratorValue(next).
    d. Let result be Call(fn, undefined, « value »).
    e. IfAbruptCloseIterator(result, iterated).
    f. If ToBoolean(result) is false, return ? IteratorClose(iterated, NormalCompletion(false)).

features: [iterator-helpers]
---*/

const iter = [1, 3, 5].values();
const fn = x => x % 2 == 1;

assert.sameValue(iter.every(fn), true);

assert.sameValue([].values().every(fn), true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
