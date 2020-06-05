//
//

/*---
esid: pending
description: %Iterator.prototype%.map value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

const map = Reflect.getOwnPropertyDescriptor(IteratorPrototype, 'map');

assert.sameValue(
  IteratorPrototype.map, map.value,
  'The value of `%Iterator.prototype%.map` is the same as the value in the property descriptor.'
);

assert.sameValue(
  typeof map.value, 'function',
  '%Iterator.prototype%.map is a function.'
);

assert.sameValue(map.enumerable, false);
assert.sameValue(map.writable, true);
assert.sameValue(map.configurable, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
