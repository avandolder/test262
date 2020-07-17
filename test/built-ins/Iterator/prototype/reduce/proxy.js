// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: reduce only accesses next on the iterator once, and never accesses @@iterator.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  1. Let iterated be ? GetIteratorDirect(this value).

  1.1.1 GetIteratorDirect ( obj )
  1. If Type(obj) is not Object, throw a TypeError exception.
  2. Let nextMethod be ? GetV(obj, "next").
  3. If IsCallable(nextMethod) is false, throw a TypeError exception.
  4. Let iteratorRecord be Record { [[Iterator]]: obj, [[NextMethod]]: nextMethod, [[Done]]: false }.
  5. Return iteratorRecord.
features: [iterator-helpers]
---*/

//
// This test checks that %Iterator.prototype%.reduce only gets the `next` method off of the
// iterator once, and never accesses the @@iterator property.
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
iter.reduce((x, y) => x + y);

assert.sameValue(
  log.join('\n'),
  `get: reduce
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

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
