// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: %WrapForValidIterator% methods work on wrappers from other realms.
info: >
  Iterator Helpers proposal 2.1.3.3.1.1
features: [cross-realm, iterator-helpers]
---*/

class TestError extends Error {}

function checkIterResult({done, value}, expectedDone, expectedValue) {
  assert.sameValue(done, expectedDone);
  assert.sameValue(value, expectedValue);
}

const iter = {
  next(value) {
    return {done: false, value: arguments.length};
  },
  return() {
    throw new TestError();
  },
  throw: (value) => ({done: true, value}),
};
const thisWrap = Iterator.from(iter);
const otherGlobal = $262.createRealm().global;
const otherWrap = otherGlobal.Iterator.from(iter);

checkIterResult(thisWrap.next.call(otherWrap), false, 0);
checkIterResult(thisWrap.next.call(otherWrap, 'value'), false, 1);

assert.throws(TestError, thisWrap.return.bind(otherWrap));

checkIterResult(thisWrap.throw.call(otherWrap, 'value'), true, 'value');



