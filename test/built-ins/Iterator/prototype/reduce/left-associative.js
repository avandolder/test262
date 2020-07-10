// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/


assert.sameValue([1, 2, 3].values().reduce((x, y) => `(${x}+${y})`, 0), '(((0+1)+2)+3)');
assert.sameValue([1, 2, 3].values().reduce((x, y) => `(${x}+${y})`), '((1+2)+3)');

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
