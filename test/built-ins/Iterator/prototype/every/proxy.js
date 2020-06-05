// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1]?.toString()}`);
    return Reflect[key](...args);
  },
});

class Counter extends Iterator {
  value = 0;
  next() {
    const value = this.value;
    if (value < 2) {
      this.value = value + 1;
      return {done: false, value};
    }
    return {done: true};
  }
}

const iter = new Proxy(new Counter(), handlerProxy);
assert.sameValue(iter.every(x => x % 2 == 0), false);

assert.sameValue(
  log.join('\n'),
  `get: every
get: next
get: value
set: value
getOwnPropertyDescriptor: value
defineProperty: value
get: value
set: value
getOwnPropertyDescriptor: value
defineProperty: value
get: return`
);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
