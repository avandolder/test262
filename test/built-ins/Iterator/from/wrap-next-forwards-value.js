// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

class Iter {
  next(value) {
    this.v = value;
    return { done: false, value };
  }
}

const iter = new Iter();
const wrap = Iterator.from(iter);
assert.sameValue(iter !== wrap, true);

assert.sameValue(iter.v, undefined);
wrap.next(1);
assert.sameValue(iter.v, 1);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
