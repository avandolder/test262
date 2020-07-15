// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({ done: this.closed });
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = () => { throw new Error(); };

(async () => {
  const iter = new TestIterator();

  assert.sameValue(iter.closed, false);
  try {
    await iter.every(fn);
    assert.sameValue(true, false, 'expected error');
  } catch (err) {
    assert.sameValue(err instanceof Error, true);
  }
  assert.sameValue(iter.closed, true);
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
