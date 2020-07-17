// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If reducer throws, the iterator is closed.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  ...
  5. Repeat,
    ...
    d. Let result be Call(reducer, undefined, « accumulator, value »).
    e. IfAbruptCloseIterator(result, iterated).
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    return { done: this.closed, value: undefined };
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const reducer = (x, y) => { throw new Error(); };
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assert.throws(Error, () => iter.reduce(reducer));
assert.sameValue(iter.closed, true);



