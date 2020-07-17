// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: If calling next throws, do not close the iterator.
info: _
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  next() {
    throw new Error();
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = x => x;
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
iter.find(fn).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof Error, true);
  assert.sameValue(iter.closed, false);
}).then($DONE, $DONE);



