// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If fn throws, close the iterator.
info: |
  2.1.4.10 %Iterator.prototype%.forEach ( fn )
  3. Repeat,
    ...
    d. Let result be Call(fn, undefined, « value »).
    e. IfAbruptCloseIterator(result, iterated).

features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    return { done: this.closed };
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = () => { throw new Error(); };
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assert.throws(Error, () => iter.some(fn));
assert.sameValue(iter.closed, true);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
