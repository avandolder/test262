// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: `filter` coerces the result of `fn` to a boolean.
info: |
  Iterator Helpers proposal
  2.1.5.3 %Iterator.prototype%.filter ( fn )
  [...]
  2. Repeat,
    [...]
    f. If ! ToBoolean(selected) is true, 

features: [iterator-helpers]
---*/

// All truthy values are kept.
const truthyValues = [true, 1, [], {}, 'test'];
for (const value of [...truthyValues].values().filter(x => x)) {
  assert.sameValue(truthyValues.shift(), value);
}

// All falsy values are filtered out.
const falsyValues = [false, 0, '', null, undefined, NaN, -0, 0n];
const result = falsyValues.values().filter(x => x).next();
assert.sameValue(result.done, true);
assert.sameValue(result.value, undefined);



