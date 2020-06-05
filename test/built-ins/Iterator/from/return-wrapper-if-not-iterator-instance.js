// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Iterator.from returns an iterator wrapper if O is not an instance of Iterator.
features: [iterator-helpers]
---*/

class TestIterator {
  [Symbol.iterator]() {
    return this;
  }

  next() {
    return { done: false, value: 0 };
  }
}

const iter = new TestIterator();
assert.sameValue(iter instanceof Iterator, false);

const wrapper = Iterator.from(iter);
assert.notSameValue(iter, wrapper);
assert.sameValue(wrapper instanceof Iterator, true);
