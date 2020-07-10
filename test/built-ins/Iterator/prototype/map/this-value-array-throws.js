// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

//

/*---
esid: pending
description: TypeError is thrown if `this` is an Array.
info:
features: [iterator-helpers]
---*/

assert.throws(TypeError, () => Iterator.prototype.map.call([], x => x));

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
