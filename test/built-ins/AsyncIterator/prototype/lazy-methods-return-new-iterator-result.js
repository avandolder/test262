// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy Iterator Helper methods return new iterator result objects.
info: >
  Iterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

const iterResult = {done: false, value: 1, testProperty: 'test'};
class TestIterator extends AsyncIterator {
  async next() {
    return iterResult;
  }
}

async function* gen(x) { yield x; }

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => true),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(gen),
];

// Call `return` before stepping the iterator:
(async () => {
  for (const method of methods) {
    const iter = new TestIterator();
    const iterHelper = method(iter);
    const result = await iterHelper.next();
    assert.sameValue(result === iterResult, false);
    assert.sameValue(result.testProperty, undefined);
  }
})().then($DONE, $DONE);



