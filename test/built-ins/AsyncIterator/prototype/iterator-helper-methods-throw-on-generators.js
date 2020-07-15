// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function *gen() { yield 'value'; }

const asyncIteratorHelperProto = Object.getPrototypeOf(gen().map(x => x));

assert.throws(TypeError, () => asyncIteratorHelperProto.next.call(gen()));
assert.throws(TypeError, () => asyncIteratorHelperProto.return.call(gen()));
assert.throws(TypeError, () => asyncIteratorHelperProto.throw.call(gen()));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
