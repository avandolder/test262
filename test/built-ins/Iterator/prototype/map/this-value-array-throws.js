//
//

/*---
esid: pending
description: TypeError is thrown if `this` is an Array.
info:
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.throws(TypeError, () => IteratorPrototype.map.call([], x => x));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
