// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  constructor(value) {
    super();
    this.value = value;
  }

  next() {
    return Promise.resolve(this.value);
  }
}

const sum = (x, y) => x + y;
function check(value) {
  const iter = new TestIterator(value);
  iter.reduce(sum).then(() => assert.sameValue(true, false, 'expected error'), err => {
    assert.sameValue(err instanceof TypeError, true);
  });
}

(async () => {
  await check();
  await check(undefined);
  await check(null);
  await check(0);
  await check(false);
  await check('');
  await check(Symbol(''));
})().then($DONE, $DONE);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
