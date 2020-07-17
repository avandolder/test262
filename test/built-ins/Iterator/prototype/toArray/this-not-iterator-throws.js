// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Throw if this is not an iterator.
info: |
  2.1.4.9 %Iterator.prototype%.toArray ( )
  1. Let iterated be ? GetIteratorDirect(this value).

  1.1.1 GetIteratorDirect ( obj )
  1. If Type(obj) is not Object, throw a TypeError exception.
  2. Let nextMethod be ? GetV(obj, "next").
  3. If IsCallable(nextMethod) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

assert.throws(TypeError, Iterator.prototype.toArray.bind(undefined));
assert.throws(TypeError, Iterator.prototype.toArray.bind({}));
assert.throws(TypeError, Iterator.prototype.toArray.bind({next: 0}));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
