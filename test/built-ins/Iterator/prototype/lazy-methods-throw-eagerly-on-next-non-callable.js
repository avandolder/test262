// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %Iterator.prototype% methods throw eagerly when `next` is non-callable.
info: >
  Iterator Helpers proposal 1.1.1
features: [iterator-helpers]
---*/

const methods = [
  next => Iterator.prototype.map.bind({next}, x => x),
  next => Iterator.prototype.filter.bind({next}, x => x),
  next => Iterator.prototype.take.bind({next}, 1),
  next => Iterator.prototype.drop.bind({next}, 0),
  next => Iterator.prototype.asIndexedPairs.bind({next}),
  next => Iterator.prototype.flatMap.bind({next}, x => [x]),
];

for (const method of methods) {
  assert.throws(TypeError, method(0));
  assert.throws(TypeError, method(false));
  assert.throws(TypeError, method(undefined));
  assert.throws(TypeError, method(null));
  assert.throws(TypeError, method(''));
  assert.throws(TypeError, method(Symbol('')));
  assert.throws(TypeError, method({}));
  assert.throws(TypeError, method([]));
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
