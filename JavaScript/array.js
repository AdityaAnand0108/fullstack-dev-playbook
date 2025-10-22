// Array notes and examples
// Arrays are used to store multiple values in a single variable.
// They are ordered collections, meaning the order of elements is preserved.
// Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays.
// Creating an array
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
// Accessing elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[2]); // Output: 'cherry'
// Modifying elements
fruits[1] = 'blueberry';
console.log(fruits);
// Output: ['apple', 'blueberry', 'cherry']
// Array methods
// Adding elements to the end
fruits.push('date');
console.log(fruits); // Output: ['apple', 'blueberry', 'cherry', 'date']