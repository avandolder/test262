//
//

/*---
esid: pending
description: %Iterator.prototype%.map handles empty iterators.
info: >
  17 ECMAScript Standard Built-in Objects
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

const iterator = Object.setPrototypeOf({
  next: function() { 
    return {done: true};
  },
}, IteratorPrototype);

assert.sameValue(
  iterator.map(x => x).next().done, true,
  '%Iterator.prototype%.map returns `done` for empty iterators.'
);

assert.sameValue(
  [].values().map(x => x).next().done, true,
  '%Iterator.prototype%.map returns `done` for empty iterators.'
);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
