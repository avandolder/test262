// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


const fn = x => x;
assert.throws(TypeError, Iterator.prototype.forEach.bind(undefined, fn));
assert.throws(TypeError, Iterator.prototype.forEach.bind({}, fn));
assert.throws(TypeError, Iterator.prototype.forEach.bind({next: 0}, fn));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
