// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If fn throws, close the iterator.
info: _
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({done: this.closed});
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = () => { throw new Error(); };
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
iter.find(fn).then(() => {
  throw new Error('promise should be rejected');
}, err => {
  assert.sameValue(err instanceof Error, true);
  assert.sameValue(iter.closed, true);
}).then($DONE, $DONE);



