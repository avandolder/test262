// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Throw if this is not an iterator.
info: |
  2.1.4.13 %Iterator.prototype%.find ( fn )
  1. Let iterated be ? GetIteratorDirect(this value).

  1.1.1 GetIteratorDirect ( obj )
  1. If Type(obj) is not Object, throw a TypeError exception.
  2. Let nextMethod be ? GetV(obj, "next").
  3. If IsCallable(nextMethod) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/


const fn = x => x;
assert.throws(TypeError, Iterator.prototype.find.bind(undefined, fn));
assert.throws(TypeError, Iterator.prototype.find.bind({}, fn));
assert.throws(TypeError, Iterator.prototype.find.bind({next: 0}, fn));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
