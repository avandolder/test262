// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: The source iterator is not closed if `next` throws.
info: |
  Iterator Helpers proposal
  2.1.5.12 %Iterator.prototype%.every ( fn )
  [...]
  3. Repeat,
    a. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    throw new Error();
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = () => {};
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assert.throws(Error, () => iter.every(fn));
assert.sameValue(iter.closed, false);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
