//
//

/*---
esid: pending
description: %Iterator.prototype%.map accesses specified properties only.
info: >
features: [Symbol.iterator]
---*/

const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

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
const iterator = Object.setPrototypeOf({
  next: function() {
    return { done: false, value: 0 };
  },
  return: function() {
    log.push('close iterator');
  },
}, IteratorPrototype);
const iteratorProxy = new Proxy(iterator, handlerProxy(log));
const mappedProxy = iteratorProxy.map(x => { throw 'error'; });

try {
  mappedProxy.next();
} catch (exc) {
  assert.sameValue(exc, 'error');
}

assert.sameValue(
  log.join('\n'),
`get: map
get: next
get: return
close iterator`
);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
