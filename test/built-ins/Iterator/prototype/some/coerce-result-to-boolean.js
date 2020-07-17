// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Result of fn is coerced to a boolean.
info: |
  2.1.4.11 %Iterator.prototype%.some ( fn )
  3. Repeat,
    ...
    f. If ToBoolean(result) is true, return ? IteratorClose(iterated, NormalCompletion(true)).

features: [iterator-helpers]
---*/

const fn = (value) => value;
assert.sameValue([true].values().some(fn), true);
assert.sameValue([1].values().some(fn), true);
assert.sameValue([[]].values().some(fn), true);
assert.sameValue([{}].values().some(fn), true);
assert.sameValue(['test'].values().some(fn), true);

assert.sameValue([false].values().some(fn), false);
assert.sameValue([0].values().some(fn), false);
assert.sameValue([''].values().some(fn), false);
assert.sameValue([null].values().some(fn), false);
assert.sameValue([undefined].values().some(fn), false);
assert.sameValue([NaN].values().some(fn), false);
assert.sameValue([-0].values().some(fn), false);
assert.sameValue([0n].values().some(fn), false);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
