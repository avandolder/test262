// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %WrapForValidIteratorPrototype%.throw gets the throw property off the iterator.
info: |
  Iterator Helpers proposal 2.1.3.3.1
features: [iterator-helpers]
---*/

const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1].toString()}`);

    const item = Reflect[key](...args);
    if (typeof item === 'function')
      return item.bind(receiver);
    return item;
  },
});
const iter = new Proxy({
  next: () => ({ done: false, value: 0 }),
  throw: (value) => ({ done: true, value }),
}, handlerProxy);

const wrap = Iterator.from(iter);
wrap.throw();
wrap.throw();

assert.sameValue(
  log.join('\n'),
  `get: Symbol(Symbol.iterator)
get: next
get: throw
get: throw`
);



