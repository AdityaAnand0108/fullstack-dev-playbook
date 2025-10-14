const num = 1230000.456789

console.log(num.toLocaleString("en-IN")) // "12,30,000.457" - Indian Numbering System
console.log(num.toFixed(2)) // "1230000.46" - Fixed to 2 decimal places
console.log(num.toExponential(3)) // "1.230e+6" - Exponential notation with 3 decimal places
console.log(num.toPrecision(5)) // "1.2300e+6" - Precision of 5 significant digits

// Math methods
console.log(Math.PI) // 3.141592653589793 - Value of PI
console.log(Math.E) // 2.718281828459045 - Value of Euler's number
console.log(Math.sqrt(16)) // 4 - Square root
console.log(Math.pow(2, 3)) // 8 - 2 raised to the power of 3
console.log(Math.abs(-10)) // 10 - Absolute value
console.log(Math.ceil(4.2)) // 5 - Rounds up to the nearest integer
console.log(Math.floor(4.7)) // 4 - Rounds down to the nearest integer
console.log(Math.round(4.5)) // 5 - Rounds to the nearest integer
console.log(Math.min(1, 2, 3, -4, 5)) // -4 - Minimum value
console.log(Math.max(1, 2, 3, -4, 5)) // 5 - Maximum value
console.log(Math.random()) // Random number between 0 and 1
console.log(Math.sin(Math.PI / 2)) // 1 - Sine of 90 degrees
console.log(Math.cos(0)) // 1 - Cosine of 0 degrees
console.log(Math.tan(Math.PI / 4)) // 1 - Tangent of 45 degrees
console.log(Math.log(Math.E)) // 1 - Natural logarithm
console.log(Math.log10(100)) // 2 - Base 10 logarithm