// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %Iterator.prototype%.map calls return when yield throws.
info: _
features: [iterator-helpers]
---*/

class TestError extends Error {}

class TestIterator extends Iterator {
  constructor(log) {
    super();
    this.log = log;
  }

  next() {
    return {done: false, value: 0};
  }

  return(value) {
    log.push('close iterator');
    return {done: true, value};
  }
}

const handlerProxy = log => new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    const target = args[0];
    const item = Reflect[key](...args);

    log.push(`${key}: ${args.filter(x => typeof x != 'object').map(x => x.toString())}`);

    switch (typeof item) {
      case 'function': return item.bind(new Proxy(target, handlerProxy(log)));
      case 'object': return new Proxy(item, handlerProxy(log));
      default: return item;
    }
  },
});

const log = [];
const iterator = new TestIterator(log);
const iteratorProxy = new Proxy(iterator, handlerProxy(log));
const mappedProxy = iteratorProxy.map(x => x);

mappedProxy.next();
assert.throws(TestError, () => mappedProxy.throw(new TestError()));
mappedProxy.next();

assert.sameValue(
  log.join('\n'),
`get: map
get: next
get: return
close iterator`
);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
