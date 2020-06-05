// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
features: [iterator-helpers]
---*/

class Iter {
  next() {
    return { done: false, value: 0 };
  }
}

const iter = new Iter();
const wrap = Iterator.from(iter);

assert.throws(Error, () => wrap.throw(new Error()));

class IterThrowNull {
  next() {
    return { done: false, value: 0 };
  }
  throw = null;
}

const iterNull = new IterThrowNull();
const wrapNull = Iterator.from(iter);

assert.throws(Error, () => wrapNull.throw(new Error()));

class IterWithThrow {
  next() {
    return { done: false, value: 0 };
  }

  throw(value) {
    return value;
  }
}

const iterWithThrow = new IterWithThrow();
const wrapWithThrow = Iterator.from(iterWithThrow);

assert.sameValue(wrapWithThrow.throw(1), 1);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
