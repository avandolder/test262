// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Iterator.from returns an iterator wrapper if O is not an iterable.
features: [iterator-helpers]
---*/

class TestIterator {
  next() {
    return { done: false, value: 0 };
  }
}

const iter = new TestIterator();
assert.sameValue(
  Symbol.iterator in iter,
  false,
  'iter is not an iterable.'
);

const wrapper = Iterator.from(iter);
assert.notSameValue(iter, wrapper);
assert.sameValue(
  Symbol.iterator in wrapper,
  true,
  'wrapper is an iterable.'
);
