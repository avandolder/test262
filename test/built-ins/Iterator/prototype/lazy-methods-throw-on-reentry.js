// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: IteratorHelpers throw a TypeError if they are reentered while executing.
features: [iterator-helpers]
---*/

const methods = [
  iter => iter.map,
  iter => iter.filter,
  iter => iter.flatMap,
];

for (const method of methods) {
  const iter = [1].values();
  const iterMethod = method(iter);
  let iterHelper;
  iterHelper = iterMethod.call(iter, x => iterHelper.next());
  assert.throws(TypeError, () => iterHelper.next());
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
