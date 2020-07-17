// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Call next on an iterator that is being iterated over.
info: _
features: [iterator-helpers]
---*/

const iterator = [1, 2, 3].values()
const items = [];

for (const item of iterator.map(x => x ** 2)) {
  const nextItem = iterator.next();
  items.push(item, nextItem.value);
}

assert.sameValue(items[0], 1);
assert.sameValue(items[1], 2);
assert.sameValue(items[2], 9);
assert.sameValue(items[3], undefined);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
