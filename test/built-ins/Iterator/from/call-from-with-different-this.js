// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

const iter = {
  next: () => ({done: false, value: 0}),
};
const wrap = Iterator.from.call(undefined, iter);

const result = wrap.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 0);

const returnResult = wrap.return(1);
assert.sameValue(returnResult.done, true);
assert.sameValue(returnResult.value, 1);

assert.throws(Error, () => wrap.throw(new Error()));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
