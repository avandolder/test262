// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods handle empty iterators.
info: >
  Iterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class EmptyIterator extends AsyncIterator {
  async next() { 
    return {done: true};
  }
}

async function* gen() {}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(x => gen()),
];

(async () => {
  for (const method of methods) {
    for (const iterator of [new EmptyIterator(), gen()]) {
      const {done, value} = await method(iterator).next();
      assert.sameValue(done, true);
      assert.sameValue(value, undefined);
    }
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
