// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `every` short-circuits and returns false if any values don't match the predicate.
info: |
  2.1.5.12 %Iterator.prototype%.every ( fn )
  3. Repeat,
    [...]
    c. Let value be ? IteratorValue(next).
    d. Let result be Call(fn, undefined, « value »).
    e. IfAbruptCloseIterator(result, iterated).
    f. If ToBoolean(result) is false, return ? IteratorClose(iterated, NormalCompletion(false)).

features: [iterator-helpers]
---*/

const iter = [1, 2, 3].values();
const log = [];
const fn = (value) => {
  log.push(value.toString());
  return value % 2 == 1;
};

assert.sameValue(iter.every(fn), false);
assert.sameValue(log.join(','), '1,2');

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
