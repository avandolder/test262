//
//

/*---
esid: pending
description: Eagerly throw TypeError when `mapper` is not callable.
info:
features: []
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.throws(TypeError, () => IteratorPrototype.map(undefined));
assert.throws(TypeError, () => [].values().map(undefined));

assert.throws(TypeError, () => IteratorPrototype.map(null));
assert.throws(TypeError, () => [].values().map(null));

assert.throws(TypeError, () => IteratorPrototype.map(0));
assert.throws(TypeError, () => [].values().map(0));

assert.throws(TypeError, () => IteratorPrototype.map(false));
assert.throws(TypeError, () => [].values().map(false));

assert.throws(TypeError, () => IteratorPrototype.map({}));
assert.throws(TypeError, () => [].values().map({}));

assert.throws(TypeError, () => IteratorPrototype.map(''));
assert.throws(TypeError, () => [].values().map(''));

assert.throws(TypeError, () => IteratorPrototype.map(new Symbol('')));
assert.throws(TypeError, () => [].values().map(new Symbol('')));

if (typeof reportCompare == 'function')
    reportCompare(0, 0);
