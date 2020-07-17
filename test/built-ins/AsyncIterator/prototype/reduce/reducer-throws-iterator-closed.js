// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If reducer throws, close the iterator.
info: _
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({ done: this.closed, value: undefined });
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const reducer = (x, y) => { throw new Error(); };
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
iter.reduce(reducer).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof Error, true);
  assert.sameValue(iter.closed, true);
});



