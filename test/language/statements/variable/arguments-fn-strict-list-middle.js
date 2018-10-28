// Copyright (c) 2018 Mike Pennisi.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-33-s
esid: sec-variable-statement
description: >
  arguments as local var identifier throws SyntaxError in strict mode within a
  function declaration
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

function f() {
  var a, arguments, b;
}
