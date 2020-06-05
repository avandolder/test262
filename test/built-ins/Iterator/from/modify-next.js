// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

const iter = {
  next: () => ({ done: false, value: 0 }),
};

const wrap = Iterator.from(iter);

iter.next = () => ({ done: true, value: undefined });

let {done, value} = wrap.next();
assert.sameValue(done, false);
assert.sameValue(value, 0);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
