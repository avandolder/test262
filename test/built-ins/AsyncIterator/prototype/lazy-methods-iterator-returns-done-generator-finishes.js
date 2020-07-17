// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: AsyncIteratorHelpers always return {done:true, value:undefined} after finishing.
info: _
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  async next() {
    return {done: true, value: 'value'};
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

(async () => {
  for (const method of methods) {
    const iterator = method(new TestIterator());
    const {done, value} = await iterator.next();
    assert.sameValue(done, true);
    assert.sameValue(value, undefined);
  }
})().then($DONE, $DONE);



