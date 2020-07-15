// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

//
// This test checks that %Iterator.prototype%.forEach only gets the `next` method off of the
// iterator once, and never accesses the @@iterator property.
const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1]?.toString()}`);
    return Reflect[key](...args);
  },
});

class Counter extends AsyncIterator {
  value = 0;
  next() {
    const value = this.value;
    if (value < 2) {
      this.value = value + 1;
      return Promise.resolve({done: false, value});
    }
    return Promise.resolve({done: true});
  }
}

const iter = new Proxy(new Counter(), handlerProxy);
iter.forEach(x => x).then(() => {
  assert.sameValue(
    log.join('\n'),
    `get: forEach
get: next
get: value
set: value
getOwnPropertyDescriptor: value
defineProperty: value
get: value
set: value
getOwnPropertyDescriptor: value
defineProperty: value
get: value`
  );
}).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
