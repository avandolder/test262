// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Generator methods throw TypeErrors when called on IteratorHelpers.
features: [iterator-helpers]
---*/

const generatorProto = Object.getPrototypeOf(
  Object.getPrototypeOf(
    (function *() {})()
  )
);

const iteratorHelper = [0].values().map(x => x);

assert.throws(TypeError, () => generatorProto.next.call(iteratorHelper));
assert.throws(TypeError, () => generatorProto.return.call(iteratorHelper));
assert.throws(TypeError, () => generatorProto.throw.call(iteratorHelper));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
