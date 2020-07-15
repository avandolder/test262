// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description:
flags: [async]
features: [iterator-helpers]
---*/

async function* gen(x) { yield x; }

const methods = ['map', 'filter', 'flatMap'];

(async () => {
  for (const method of methods) {
    const iter = gen('value');
    const iterHelper = iter[method](x => iterHelper.next());
    try {
      await iterHelper.next();
      assert.sameValue(true, false, 'Expected reject.');
    } catch (err) {
      assert.sameValue(err instanceof TypeError, true);
    }
  }
})().then($DONE, $DONE);

if (typeof reportCompare == 'function')
  reportCompare(0, 0);

