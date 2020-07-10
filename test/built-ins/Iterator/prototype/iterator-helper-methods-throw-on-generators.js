// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: IteratorHelper methods throw on generators.
features: [iterator-helpers]
---*/

const iteratorHelperProto = Object.getPrototypeOf([].values().map(x => x));

function *gen() {
  yield 1;
}

assert.throws(TypeError, () => iteratorHelperProto.next.call(gen()));
assert.throws(TypeError, () => iteratorHelperProto.return.call(gen()));
assert.throws(TypeError, () => iteratorHelperProto.throw.call(gen()));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
