//* A tuple is a typed array with a pre-defined length and types for each index.

//* 1. tuple defining
const employee: [number, string] = [1, "Steve"];
// there is no type safety after index 1 and also we can enter as many number of times we want 
employee.push("Sumant");
employee.push('patel');

console.log(employee);

//* 2. tuple with fixed size
const readOnlyExample: readonly [number, boolean, string] = [5, true, "sumant"]
// readOnlyExample.push("hello") t // ! this will throw error now

//* 3. nameed tuples
const graph: [x: number, y: number] = [55.2, 41.3];
// destructuring tuple , same as array
const [x, y, ...a] = graph
console.log(`x: ${x} , y: ${y} , rest: ${a}`);





