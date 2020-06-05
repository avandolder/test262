// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const sum = (x, y) => x + y;
assert.throws(TypeError, Iterator.prototype.reduce.bind(undefined, sum));
assert.throws(TypeError, Iterator.prototype.reduce.bind({}, sum));
assert.throws(TypeError, Iterator.prototype.reduce.bind({next: 0}, sum));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
