// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Multiple chained %Iterator.prototype%.map calls pass `lastValue` to the iterator's `next` call.
info: >
  Iterator Helpers Proposal 2.1.5.2
features: [iterator-helpers]
---*/

let nextWasPassed;

const iteratorWhereNextTakesValue = Object.setPrototypeOf({
  next: function(value) {
    nextWasPassed = value;

    if (this.value < 3)
      return { done: false, value: this.value++ };
    return { done: true, value: undefined };
  },
  value: 0,
}, Iterator.prototype);

const mappedIterator = iteratorWhereNextTakesValue.map(x => 2 * x).map(x => 1 + x);

assert.sameValue(mappedIterator.next(1).value, 1);
assert.sameValue(nextWasPassed, undefined);

assert.sameValue(mappedIterator.next(2).value, 3);
assert.sameValue(nextWasPassed, 2);

assert.sameValue(mappedIterator.next(3).value, 5);
assert.sameValue(nextWasPassed, 3);

assert.sameValue(mappedIterator.next(4).done, true);
assert.sameValue(nextWasPassed, 4);

assert.sameValue(mappedIterator.next(5).done, true);
assert.sameValue(nextWasPassed, 4);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
