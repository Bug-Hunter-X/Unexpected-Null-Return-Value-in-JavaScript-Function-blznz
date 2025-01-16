# Unexpected Null Return Value in JavaScript Function

This repository demonstrates an uncommon JavaScript bug related to unexpected null return values.  The function `foo` is designed to add two numbers. However, it returns null if either input is null.  This behavior might be unexpected in certain contexts.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version that handles null values appropriately.

**Bug:** The function returns `null` when either `a` or `b` is `null`.  A more robust solution would provide a more informative response, such as 0, the other number, or an error.

**Solution:**  The solution file demonstrates handling null values using a conditional (ternary) operator, providing a default value of 0 when one of the inputs is null.  You could also throw an error or use another approach to handle null values based on your specific requirements.
