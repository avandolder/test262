// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %WrapForValidIteratorPrototype%.return calls the modified return method.
features: [iterator-helpers]
---*/

const iter = {
  next: () => ({ done: false, value: 0 }),
  return: (value) => ({ done: true, value }),
};

const wrap = Iterator.from(iter);

let {done, value} = wrap.return(1);
assert.sameValue(done, true);
assert.sameValue(value, 1);

iter.return = () => { throw new Error(); };
assert.throws(Error, () => wrap.return());

iter.return = null;
let nullResult = wrap.return(2);
assert.sameValue(nullResult.done, true);
assert.sameValue(nullResult.value, 2);



