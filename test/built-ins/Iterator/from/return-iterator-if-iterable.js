// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Iterator.from returns O if it is iterable, an interator, and an instance of Iterator.
info: |

features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
  [Symbol.iterator]() {
    return this;
  }

  next() {
    return { done: false, value: this.value++ };
  }

  value = 0;
}

const iter = new TestIterator();
assert.sameValue(iter, Iterator.from(iter));

const arrayIter = [1, 2, 3][Symbol.iterator]();
assert.sameValue(arrayIter, Iterator.from(arrayIter));
