// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods throw eagerly when passed non-callables.
info: >
  Iterator Helpers proposal 2.1.6
features: [iterator-helpers]
---*/

async function* gen() {}

const methods = [
  (iter, fn) => iter.map(fn),
  (iter, fn) => iter.filter(fn),
  (iter, fn) => iter.flatMap(fn),
];

for (const method of methods) {
  assert.throws(TypeError, () => method(AsyncIterator.prototype, 0));
  assert.throws(TypeError, () => method(AsyncIterator.prototype, false));
  assert.throws(TypeError, () => method(AsyncIterator.prototype, undefined));
  assert.throws(TypeError, () => method(AsyncIterator.prototype, null));
  assert.throws(TypeError, () => method(AsyncIterator.prototype, ''));
  assert.throws(TypeError, () => method(AsyncIterator.prototype, Symbol('')));
  assert.throws(TypeError, () => method(AsyncIterator.prototype, {}));

  assert.throws(TypeError, () => method(gen(), 0));
  assert.throws(TypeError, () => method(gen(), false));
  assert.throws(TypeError, () => method(gen(), undefined));
  assert.throws(TypeError, () => method(gen(), null));
  assert.throws(TypeError, () => method(gen(), ''));
  assert.throws(TypeError, () => method(gen(), Symbol('')));
  assert.throws(TypeError, () => method(gen(), {}));
}

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
