// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

// This test checks that %AsyncIterator.prototype%.every only gets the `next` method off of the
// iterator once, and never accesses the @@asyncIterator property.
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
iter.every(x => x % 2 == 0).then(value => {
  assert.sameValue(value, false)

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
}).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
