// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from gets @@iterator and next off an iterable object.
info: |
  Iterator Helpers proposal 2.1.3.3.1
features: [iterator-helpers]
---*/

const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1]?.toString()}`);

    const item = Reflect[key](...args);
    if (typeof item === 'function')
      return (...args) => new Proxy(item.apply(receiver, args), handlerProxy);
    return item;
  },
});

class TestIterator extends Iterator {
  next() {
    return { done: false, value: 0 };
  }
}
const iter = new TestIterator();
const proxy = new Proxy(iter, handlerProxy);
const wrap = Iterator.from(proxy);

assert.sameValue(
  log.join('\n'),
  `get: Symbol(Symbol.iterator)
get: next
getPrototypeOf: undefined`
);



