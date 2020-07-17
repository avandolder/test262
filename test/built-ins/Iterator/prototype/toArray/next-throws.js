// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: _
info: _
features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  next() {
    throw new Error();
  }
}

const iter = new TestIterator();

assert.throws(Error, () => iter.toArray());

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
