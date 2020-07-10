// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

//

/*---
esid: pending
description: Throw TypeError if `next` call returns non-object.
info:
features: [iterator-helpers]
---*/

const iterator = returnValue => Object.setPrototypeOf({
  next: () => returnValue,
}, Iterator.prototype);
const mapper = x => x;

assert.throws(TypeError, () => iterator(undefined).map(mapper).next());
assert.throws(TypeError, () => iterator(null).map(mapper).next());
assert.throws(TypeError, () => iterator(0).map(mapper).next());
assert.throws(TypeError, () => iterator(false).map(mapper).next());
assert.throws(TypeError, () => iterator('').map(mapper).next());
assert.throws(TypeError, () => iterator(Symbol()).map(mapper).next());

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
