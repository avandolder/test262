// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Return false if no value matches the predicate.
info: |
  2.1.4.11 %Iterator.prototype%.some ( fn )
  ...
  3. Repeat,
    a. Let next be ? IteratorStep(iterated).
    b. If next is false, return false.
    c. Let value be ? IteratorValue(next).
    d. Let result be Call(fn, undefined, « value »).
    e. IfAbruptCloseIterator(result, iterated).
    f. If ToBoolean(result) is true, return ? IteratorClose(iterated, NormalCompletion(true)).

features: [iterator-helpers]
---*/

const iter = [1, 3, 5].values();
const fn = (value) => value % 2 == 0;

assert.sameValue(iter.some(fn), false);

assert.sameValue([].values().some(x => x), false);



