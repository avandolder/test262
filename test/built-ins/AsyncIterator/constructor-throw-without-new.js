// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: AsyncIterator constructor throws when called without new.
features: [iterator-helpers]
---*/

assert.throws(TypeError, () => AsyncIterator());

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
