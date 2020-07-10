// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


//
//
/*---
esid: pending
description: %Iterator.prototype%.flatMap closes the iterator and throws when mapped isn't iterable.
info: >
  Iterator Helpers proposal 2.1.5.7
  1. Repeat,
    ...
    f. Let innerIterator be GetIterator(mapped, sync).
    g. IfAbruptCloseIterator(innerIterator, iterated).
features: [iterator-helpers]
---*/

class NotIterable {
  next() {
    return {done: true};
  }
}

class InvalidIterable {
  [Symbol.iterator]() {
    return {};
  }
}

class TestIterator extends Iterator {
  next() {
    return {done: false, value: 0};
  }

  closed = false;
  return() {
    this.closed = true;
    return {done: true};
  }
}

const nonIterables = [
  new NotIterable(),
  new InvalidIterable(),
  undefined,
  null,
  0,
  false,
  Symbol(''),
  0n,
  {},
];

for (const value of nonIterables) {
  const iter = new TestIterator();
  const mapped = iter.flatMap(x => value);

  assert.sameValue(iter.closed, false);
  assert.throws(TypeError, () => mapped.next());
  assert.sameValue(iter.closed, true);
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);

