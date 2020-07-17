// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Throw if this is not an iterator.
info: |
  2.1.4.8 %Iterator.prototype%.reduce ( reducer [ , initialValue ] )
  1. Let iterated be ? GetIteratorDirect(this value).

  1.1.1 GetIteratorDirect ( obj )
  1. If Type(obj) is not Object, throw a TypeError exception.
  2. Let nextMethod be ? GetV(obj, "next").
  3. If IsCallable(nextMethod) is false, throw a TypeError exception.
features: [iterator-helpers]
---*/

const sum = (x, y) => x + y;
assert.throws(TypeError, Iterator.prototype.reduce.bind(undefined, sum));
assert.throws(TypeError, Iterator.prototype.reduce.bind({}, sum));
assert.throws(TypeError, Iterator.prototype.reduce.bind({next: 0}, sum));



