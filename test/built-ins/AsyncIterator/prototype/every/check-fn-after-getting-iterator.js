// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
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
    return Promise.resolve({done: true});
  }
}

async function* gen() {
  yield 1;
}

const iter = new Proxy(new TestIterator(), handlerProxy);
iter.every(1).then(
  () => assert.sameValue(true, false, 'expected error'),
  err => assert.sameValue(err instanceof TypeError, true),
).then($DONE, $DONE);

assert.sameValue(
  log.join('\n'),
  `get: every
get: next`
);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
