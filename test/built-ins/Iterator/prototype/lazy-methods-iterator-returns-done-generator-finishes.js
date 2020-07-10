// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %Iterator.prototype% methods finish when the source iterator returns done.
info: |
  Iterator Helpers proposal 2.1.5.2-2.1.5.7
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    return {done: true, value: 'value'};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => true),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(x => [x]),
];

for (const method of methods) {
  const iterator = method(new TestIterator());
  const result = iterator.next();
  assert.sameValue(result.done, true);
  assert.sameValue(result.value, undefined);
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);

