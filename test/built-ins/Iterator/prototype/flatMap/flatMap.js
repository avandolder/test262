// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: flatMap should flatten each iterable returned by mapped.
info: 2.1.4.7 %Iterator.prototype%.flatMap ( mapper )
features: [iterator-helpers]
---*/

let iter = [1, 2, 3].values().flatMap(x => [x, x + 1]);
for (const v of [1, 2, 2, 3, 3, 4]) {
  let result = iter.next();
  assert.sameValue(result.done, false);
  assert.sameValue(result.value, v);
}
assert.sameValue(iter.next().done, true);



