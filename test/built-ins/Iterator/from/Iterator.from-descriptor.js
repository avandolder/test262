// Copyright 2020 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.
/*---
esid: pending
description: Descriptor property of Iterator.from
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

verifyWritable(Iterator, 'from');
verifyNotEnumerable(Iterator, 'from');
verifyConfigurable(Iterator, 'from');
