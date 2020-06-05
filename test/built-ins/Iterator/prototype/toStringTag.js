// Copyright (C) 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: >
  toStringTag of Iterator
info: |
  Iterator Helpers proposal 2.1.5.14 %Iterator.prototype%[@@toStringTag]
features: [iterator-helpers, Symbol.toStringTag]
includes: [propertyHelper.js]
---*/

verifyProperty(Iterator.prototype, Symbol.toStringTag, {
  value: 'Iterator',
  writable: false,
  enumerable: false,
  configurable: true,
});
