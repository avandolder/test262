// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: fn is checked to be callable after the iterator is gotten.
info: |
  2.1.4.10 %Iterator.prototype%.forEach ( fn )
  1. Let iterated be ? GetIteratorDirect(this value).
  2. If IsCallable(fn) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1]?.toString()}`);
    return Reflect[key](...args);
  },
});

class TestIterator extends Iterator {
  next() {
    return {done: true};
  }
}

const iter = new Proxy(new TestIterator(), handlerProxy);
assert.throws(TypeError, () => iter.forEach(1));

assert.sameValue(
  log.join('\n'),
  `get: forEach
get: next`
);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
