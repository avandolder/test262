// Copyright (C) 2020 . All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  Iterator constructor throws when called without new.
info: |
  Iterator Helpers proposal 2.1.3.1 Iterator()

  When the Iterator function is called, the following steps are taken:

  1. If NewTarget is undefined or the active function object, throw a TypeError exception.

features: [iterator-helpers]
---*/

assert.throws(TypeError, () => Iterator());
