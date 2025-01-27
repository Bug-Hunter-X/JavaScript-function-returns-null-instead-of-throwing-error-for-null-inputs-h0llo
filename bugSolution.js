function foo(a, b) {
  if (a === null && b === null) {
    throw new Error("Both inputs cannot be null");
  } else if (a === null || b === null) {
    return null; // Handle cases where only one is null
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // throws error