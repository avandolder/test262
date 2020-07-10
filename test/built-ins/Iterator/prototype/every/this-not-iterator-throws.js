// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `every` throws if this is not a valid iterator.
info: |
  Iterator Helpers proposal
  2.1.5.12 %Iterator.prototype%.every ( fn )
  1. Let iterated be ? GetIteratorDirect(this value).

features: [iterator-helpers]
---*/

const fn = x => x;
assert.throws(TypeError, Iterator.prototype.every.bind(undefined, fn));
assert.throws(TypeError, Iterator.prototype.every.bind({}, fn));
assert.throws(TypeError, Iterator.prototype.every.bind({next: 0}, fn));

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
