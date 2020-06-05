// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

class Iter {
  next() {
    if (this.closed)
      return { done: true, value: undefined };
    return { done: false, value: 0 };
  }

  return(value) {
    this.closed = true;
    return { done: true, value };
  }
}

const iter = new Iter();
const wrap = Iterator.from(iter);
assert.sameValue(iter.closed, undefined);

let result = wrap.next();
assert.sameValue(result.done, false);
assert.sameValue(result.value, 0);

result = wrap.return(1);
assert.sameValue(result.done, true);
assert.sameValue(result.value, 1);

assert.sameValue(iter.closed, true);
result = wrap.next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
