// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

const iter = {
  next: () => ({ done: false, value: 0 }),
  throw: (value) => ({ done: true, value }),
};

const wrap = Iterator.from(iter);

let {done, value} = wrap.throw(0);
assert.sameValue(done, true);
assert.sameValue(value, 0);

class TestError extends Error {}
iter.throw = () => { throw new TestError(); };
assert.throws(TestError, () => wrap.throw());

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
