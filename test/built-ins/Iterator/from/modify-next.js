// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %Iterator%.from saves the original next function if O is not iterable.
info: |
  Iterator Helpers proposal 2.1.3.3.1 Iterator.from ( O )
  1. Let usingIterator be ? GetMethod(O, @@iterator).
  2. If usingIterator is not undefined,
  [...]
  3. Else, Let iteratorRecord be ? GetIteratorDirect(O).
  
  Iterator Helpers proposal 1.1.1. GetIteratorDirect ( obj )
  2. Let nextMethod be ? GetV(obj, "next").
  [...]
  4. Let iteratorRecord be Record { [[Iterator]]: obj, [[NextMethod]]: nextMethod, [[Done]]: false }.
  5. Return iteratorRecord.
  
features: [iterator-helpers]
---*/

const iter = {
  next: () => ({ done: false, value: 0 }),
};

const wrap = Iterator.from(iter);

iter.next = () => ({ done: true, value: undefined });

let {done, value} = wrap.next();
assert.sameValue(done, false);
assert.sameValue(value, 0);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
