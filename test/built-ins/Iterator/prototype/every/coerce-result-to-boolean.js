// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `every` coerces the result of `fn` to a boolean.
info: |
  Iterator Helpers proposal
  2.1.5.12 %Iterator.prototype%.every ( fn )
  [...]
  3. Repeat,
    [...]
    f. If ToBoolean(result) is false, return ? IteratorClose(iterated, NormalCompletion(false)).

features: [iterator-helpers]
---*/

const fn = x => x;
assert.sameValue([true].values().every(fn), true);
assert.sameValue([1].values().every(fn), true);
assert.sameValue([[]].values().every(fn), true);
assert.sameValue([{}].values().every(fn), true);
assert.sameValue(['test'].values().every(fn), true);

assert.sameValue([false].values().every(fn), false);
assert.sameValue([0].values().every(fn), false);
assert.sameValue([''].values().every(fn), false);
assert.sameValue([null].values().every(fn), false);
assert.sameValue([undefined].values().every(fn), false);
assert.sameValue([NaN].values().every(fn), false);
assert.sameValue([-0].values().every(fn), false);
assert.sameValue([0n].values().every(fn), false);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
