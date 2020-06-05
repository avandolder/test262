//
//

/*---
esid: pending
description: Throw TypeError if `next` call returns non-object.
info:
features: []
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);
const iterator = returnValue => Object.setPrototypeOf({
  next: () => returnValue,
}, IteratorPrototype);
const mapper = x => x;

assert.throws(TypeError, () => iterator(undefined).map(mapper).next());
assert.throws(TypeError, () => iterator(null).map(mapper).next());
assert.throws(TypeError, () => iterator(0).map(mapper).next());
assert.throws(TypeError, () => iterator(false).map(mapper).next());
assert.throws(TypeError, () => iterator('').map(mapper).next());
assert.throws(TypeError, () => iterator(Symbol()).map(mapper).next());

if (typeof reportCompare == 'function')
    reportCompare(0, 0);
