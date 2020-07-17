// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Lazy %AsyncIterator.prototype% methods don't close the iterator if `next` returns rejected promise.
info: >
    AsyncIterator Helpers proposal 2.1.6
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  next() {
    return Promise.reject('rejection');
  }

  closed = false;
  async return(value) {
    this.closed = true;
    return {done: true, value};
  }
}

async function* gen(x) { yield x; }
const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(gen),
];

(async () => {
  for (const method of methods) {
    const iterator = new TestIterator();
    assert.sameValue(iterator.closed, false);
    try {
      await method(iterator).next();
      assert.sameValue(true, false, 'Expected reject');
    } catch (err) {
      assert.sameValue(err, 'rejection');
    }
    assert.sameValue(iterator.closed, false);
  }
})().then($DONE, $DONE);



