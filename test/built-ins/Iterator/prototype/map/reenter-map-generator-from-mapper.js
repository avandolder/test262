//
//

/*---
esid: pending
description: Re-entering the map() generator from the called mapper fails.
info:
features: []
---*/

let iterator;
function mapper(x) {
    let n = iterator.next();
    return x;
}
iterator = [0].values().map(mapper);

assert.throws(TypeError, iterator.next);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
