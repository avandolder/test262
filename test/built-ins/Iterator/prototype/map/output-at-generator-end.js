// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %Iterator.prototype%.map outputs correct value at end of iterator.
info: _
features: [iterator-helpers]
---*/

const iterator = [0].values().map(x => x);

const iterRecord = iterator.next();
assert.sameValue(iterRecord.done, false);
assert.sameValue(iterRecord.value, 0);

let endRecord = iterator.next();
assert.sameValue(endRecord.done, true);
assert.sameValue(endRecord.value, undefined);

endRecord = iterator.next();
assert.sameValue(endRecord.done, true);
assert.sameValue(endRecord.value, undefined);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
