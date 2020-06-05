//
//

/*---
esid: pending
description: %Iterator.prototype%.map prototype.
info: >
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);
const Generator = Object.getPrototypeOf(function*() {});
const GeneratorPrototype = Object.getPrototypeOf(Generator);
const mapProto = IteratorPrototype.map.prototype;

assert.sameValue(
  typeof mapProto, 'object',
);

assert.sameValue(
  Reflect.isExtensible(mapProto), true,
);

assert.sameValue(
  Object.getPrototypeOf(mapProto), GeneratorPrototype,
);

assert.sameValue(
  Reflect.ownKeys(mapProto).length, 0,
);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
