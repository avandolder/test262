// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: AsyncIteratorHelper methods throw on generators.
info: _
features: [iterator-helpers]
---*/

async function *gen() { yield 'value'; }

const asyncIteratorHelperProto = Object.getPrototypeOf(gen().map(x => x));

assert.throws(TypeError, () => asyncIteratorHelperProto.next.call(gen()));
assert.throws(TypeError, () => asyncIteratorHelperProto.return.call(gen()));
assert.throws(TypeError, () => asyncIteratorHelperProto.throw.call(gen()));
