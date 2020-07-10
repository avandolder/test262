// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Wrapped next methods must return objects.
info: |
  Iterator Helpers proposal 2.1.3.3.1.1.1

  ECMA262 7.4.2 IteratorNext ( iteratorRecord [ , value ] )
  3. If Type(result) is not Object, throw a TypeError exception.

features: [iterator-helpers]
---*/

const iter = (value) => Iterator.from({
  next: () => value,
});

assert.throws(TypeError, () => iter(undefined).next());
assert.throws(TypeError, () => iter(null).next());
assert.throws(TypeError, () => iter(0).next());
assert.throws(TypeError, () => iter(false).next());
assert.throws(TypeError, () => iter('test').next());
assert.throws(TypeError, () => iter(Symbol('')).next());

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
