// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %Iterator.prototype% methods work on iterators from other realms.
info: |
  Iterator Helpers proposal 2.1.5
features: [cross-realm, iterator-helpers]
---*/

const otherIteratorProto = $262.createRealm().global.Iterator.prototype;

const methods = [
  ["map", x => x],
  ["filter", x => true],
  ["take", Infinity],
  ["drop", 0],
  ["asIndexedPairs", undefined],
  ["flatMap", x => [x]],
];

// Use the lazy Iterator methods from another global on an iterator from this global.
for (const [method, arg] of methods) {
  const iterator = [1, 2, 3].values();
  const helper = otherIteratorProto[method].call(iterator, arg);

  for (const expected of [1, 2, 3]) {
    const {done, value} = helper.next();
    assert.sameValue(done, false);
    assert.sameValue(Array.isArray(value) ? value[1] : value, expected);
  }

  const {done, value} = helper.next();
  assert.sameValue(done, true);
  assert.sameValue(value, undefined);
}

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
