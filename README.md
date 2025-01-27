# JavaScript Function Bug

This repository contains a JavaScript function with a bug and its solution. The function `foo` takes two arguments, `a` and `b`, and returns their sum.  However, the function currently returns `null` if either `a` or `b` is `null`.  The bug is that it does not handle the case where both `a` and `b` are `null` appropriately. The expected behavior is to throw an error if both inputs are null, rather than returning null.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected code.