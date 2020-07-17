// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Passing an AsyncIteratorHelper to an AsyncGenerator throws a TypeError
info: _
flags: [async]
features: [iterator-helpers]
---*/

async function checkError(fn, errorType) {
  try {
    await fn();
    assert.sameValue(true, false, 'Expected exception');
  } catch (err) {
    assert.sameValue(err instanceof errorType, true);
  }
}

const asyncGeneratorProto = Object.getPrototypeOf(
  Object.getPrototypeOf(
    (async function *() {})()
  )
);

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(x => (async function*() {})()),
];

(async () => {
  for (const method of methods) {
    const iteratorHelper = method((async function*() {})());
    await checkError(asyncGeneratorProto.next.bind(iteratorHelper), TypeError);
    await checkError(asyncGeneratorProto.return.bind(iteratorHelper), TypeError);
    await checkError(asyncGeneratorProto.throw.bind(iteratorHelper), TypeError);
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);
