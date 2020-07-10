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
description: Mutate an iterator after it has been mapped and returned done.
info:
features: [iterator-helpers]
---*/

const array = [1, 2, 3];
const iterator = [1, 2, 3].values().map(x => x * 2);

assert.sameValue(iterator.next().value, 2);
assert.sameValue(iterator.next().value, 4);
assert.sameValue(iterator.next().value, 6);
assert.sameValue(iterator.next().done, true);

array.push(4);
assert.sameValue(iterator.next().done, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
