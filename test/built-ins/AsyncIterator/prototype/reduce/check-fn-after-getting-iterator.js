// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: fn is checked to be callable after the iterator is gotten.
info: _
flags: [async]
features: [iterator-helpers]
---*/

const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1]?.toString()}`);
    return Reflect[key](...args);
  },
});

class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({ done: this.closed });
  }
}

const iter = new Proxy(new TestIterator(), handlerProxy);
iter.reduce(1).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof TypeError, true);
  assert.sameValue(
    log.join('\n'),
    `get: reduce
get: next`
  );
}).then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
