function foo(a, b) {
  return (a === null ? 0 : a) + (b === null ? 0 : b);
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); // Output: 0