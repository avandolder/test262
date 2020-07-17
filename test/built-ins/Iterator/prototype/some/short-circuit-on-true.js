// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Short circuit on fn returning true.
info: |
  2.1.4.11 %Iterator.prototype%.some ( fn )
  3. Repeat,
    ...
    d. Let result be Call(fn, undefined, « value »).
    e. IfAbruptCloseIterator(result, iterated).
    f. If ToBoolean(result) is true, return ? IteratorClose(iterated, NormalCompletion(true)).

features: [iterator-helpers]
---*/

const iter = [1, 2, 3].values();
const log = [];
const fn = (value) => {
  log.push(value.toString());
  return value % 2 == 0;
};

assert.sameValue(iter.some(fn), true);
assert.sameValue(log.join(','), '1,2');



