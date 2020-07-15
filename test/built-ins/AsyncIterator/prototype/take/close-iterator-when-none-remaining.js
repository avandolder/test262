// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/


//
//
/*---
esid: pending
description: %AsyncIterator.prototype%.take closes the iterator when remaining is 0.
info: >
  Iterator Helpers proposal 2.1.6.4
flags: [async]
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
  async next() {
    return {done: false, value: 'value'};
  }

  closed = false;
  async return() {
    this.closed = true;
    return {done: true};
  }
}

const iter = new TestIterator();
const iterTake = iter.take(1);

iterTake.next().then(
  ({done, value}) => {
    assert.sameValue(done, false);
    assert.sameValue(value, 'value');
    assert.sameValue(iter.closed, false);

    iterTake.next().then(
      ({done, value}) => {
        assert.sameValue(done, true);
        assert.sameValue(value, undefined);
        assert.sameValue(iter.closed, true);
      }
    );
  }
);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
