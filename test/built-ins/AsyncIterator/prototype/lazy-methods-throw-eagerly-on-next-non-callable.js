// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods throw eagerly when `next` is non-callable.
info: >
  Iterator Helpers proposal 1.1.1
features: [iterator-helpers]
---*/

async function* gen(x) { yield x; }
const methods = [
  next => AsyncIterator.prototype.map.bind({next}, x => x),
  next => AsyncIterator.prototype.filter.bind({next}, x => x),
  next => AsyncIterator.prototype.take.bind({next}, 1),
  next => AsyncIterator.prototype.drop.bind({next}, 0),
  next => AsyncIterator.prototype.asIndexedPairs.bind({next}),
  next => AsyncIterator.prototype.flatMap.bind({next}, gen),
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
