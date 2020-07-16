//
//

/*---
esid: pending
description: Interleaved %Iterator.prototype%.map calls on the same iterator.
info:
features: []
---*/

const iterator = [1, 2, 3].values();
const mapped1 = iterator.map(x => x);
const mapped2 = iterator.map(x => 0);

assert.sameValue(mapped1.next().value, 1);
assert.sameValue(mapped2.next().value, 0);
assert.sameValue(mapped1.next().value, 3);

assert.sameValue(mapped1.next().done, true);
assert.sameValue(mapped2.next().done, true);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
