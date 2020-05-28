// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Iterator constructor can be subclassed.
info: |
  Iterator Helpers proposal 2.1.3 The Iterator Constructor

  The Iterator constructor:

  * is the initial value of the Iterator property of the global object.
  * is designed to be subclassable. It may be used as the value of an extends clause of a class defintion.

features: [iterator-helpers]
---*/

class TestIterator extends Iterator {
}

assert.sameValue(new TestIterator() instanceof Iterator, true);
