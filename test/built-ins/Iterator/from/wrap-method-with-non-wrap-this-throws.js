// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: All methods on %WrapForValidIteratorPrototype% require an [[Iterated]] slot.
info: |
  Iterator Helpers proposal 2.1.3.3.1.1.1-2.1.3.3.1.1.3
features: [iterator-helpers]
---*/


class TestIterator {
  next() {
    return {
      done: false,
      value: 0,
    };
  }
}

const nextMethod = Iterator.from(new TestIterator()).next;
assert.throws(TypeError, () => nextMethod.call(undefined));
assert.throws(TypeError, () => nextMethod.call(null));
assert.throws(TypeError, () => nextMethod.call(0));
assert.throws(TypeError, () => nextMethod.call(false));
assert.throws(TypeError, () => nextMethod.call('test'));
assert.throws(TypeError, () => nextMethod.call(Object(1)));
assert.throws(TypeError, () => nextMethod.call({}));

const returnMethod = Iterator.from(new TestIterator()).return;
assert.throws(TypeError, () => returnMethod.call(undefined));
assert.throws(TypeError, () => returnMethod.call(null));
assert.throws(TypeError, () => returnMethod.call(0));
assert.throws(TypeError, () => returnMethod.call(false));
assert.throws(TypeError, () => returnMethod.call('test'));
assert.throws(TypeError, () => returnMethod.call(Object(1)));
assert.throws(TypeError, () => returnMethod.call({}));

const throwMethod = Iterator.from(new TestIterator()).throw;
assert.throws(TypeError, () => throwMethod.call(undefined));
assert.throws(TypeError, () => throwMethod.call(null));
assert.throws(TypeError, () => throwMethod.call(0));
assert.throws(TypeError, () => throwMethod.call(false));
assert.throws(TypeError, () => throwMethod.call('test'));
assert.throws(TypeError, () => throwMethod.call(Object(1)));
assert.throws(TypeError, () => throwMethod.call({}));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
