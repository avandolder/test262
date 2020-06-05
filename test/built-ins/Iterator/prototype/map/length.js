//
//

/*---
esid: pending
description: %Iterator.prototype%.map length value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(
  IteratorPrototype.map.length, 1,
  'The value of `%Iterator.prototype%.map.length` is `1`'
);

verifyProperty(IteratorPrototype.map, 'length', {
  enumerable: false,
  writable: false,
  configurable: true,
});

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
