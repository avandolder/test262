// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If next returns a non-object, throw a TypeError.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  3. If initialValue is not present, then
    a. Let next be ? IteratorStep(iterated).
  ...
  5. Repeat,
    a. Let next be ? IteratorStep(iterated).

  1.1.2 IteratorStep ( iteratorRecord [ , value ] )
  2. If value is present, then
    a. Let result be ? IteratorNext(iteratorRecord, value).
  3. Else,
    a. Let result be ? IteratorNext(iteratorRecord).

  7.4.2 IteratorNext ( iteratorRecord [ , value ] )
  3. If Type(result) is not Object, throw a TypeError exception.

features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  constructor(value) {
    super();
    this.value = value;
  }

  next() {
    return this.value;
  }
}

const sum = (x, y) => x + y;

let iter = new TestIterator(undefined);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(null);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(0);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(false);
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator('');
assert.throws(TypeError, () => iter.reduce(sum));
iter = new TestIterator(Symbol(''));
assert.throws(TypeError, () => iter.reduce(sum));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
