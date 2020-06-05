//
//

/*---
esid: pending
description: %Iterator.prototype%.map outputs correct value at end of iterator.
info:
features: []
---*/

const iterator = [0].values().map(x => x);

const iterRecord = iterator.next();
assert.sameValue(iterRecord.done, false);
assert.sameValue(iterRecord.value, 0);

const endRecord = iterator.next();
assert.sameValue(endRecord.done, true);
assert.sameValue(endRecord.value, undefined);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
