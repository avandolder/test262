//
//

/*---
esid: pending
description: Eagerly throw TypeError when `this` is not an iterator.
info:
features: []
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

const mapper = (x) => x;

assert.throws(TypeError, () => IteratorPrototype.map.call(undefined, mapper));
assert.throws(TypeError, () => IteratorPrototype.map.call(null, mapper));
assert.throws(TypeError, () => IteratorPrototype.map.call(0, mapper));
assert.throws(TypeError, () => IteratorPrototype.map.call(false, mapper));
assert.throws(TypeError, () => IteratorPrototype.map.call({}, mapper));
assert.throws(TypeError, () => IteratorPrototype.map.call('', mapper));
assert.throws(TypeError, () => IteratorPrototype.map.call(new Symbol(''), mapper));

if (typeof reportCompare == 'function')
    reportCompare(0, 0);
