// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: AsyncIterator constructor can be subclassed.
features: [iterator-helpers]
---*/

class TestIterator extends AsyncIterator {
}

assert.sameValue(new TestIterator() instanceof AsyncIterator, true);



