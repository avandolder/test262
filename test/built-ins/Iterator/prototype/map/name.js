//
//

/*---
esid: pending
description: %Iterator.prototype%.map.name value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(
  IteratorPrototype.map.name, 'map',
  'The value of `%Iterator.prototype%.map.name` is `"map"`'
);

verifyProperty(IteratorPrototype.map, 'name', {
  enumerable: false,
  writable: false,
  configurable: true,
});

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
