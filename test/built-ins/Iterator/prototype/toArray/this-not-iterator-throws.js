// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


assert.throws(TypeError, Iterator.prototype.toArray.bind(undefined));
assert.throws(TypeError, Iterator.prototype.toArray.bind({}));
assert.throws(TypeError, Iterator.prototype.toArray.bind({next: 0}));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
