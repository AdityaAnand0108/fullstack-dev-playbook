// Basic Access:
// Create an array of three colors and print the second color.
let color = ["blue", "green", "yellow"];
console.log(color[1])


// Push/Pop Practice:
// Start with an empty array. Add three numbers to it using push() and remove one using pop().
color.push("black");
color.push("pink");
color.pop()
console.log(color)

// Filter Practice:
// Given [1, 5, 8, 12, 3], use filter() to create a new array with only numbers greater than 5.

let a  = [1, 5, 8, 12, 3];
let b = a.filter( a => a>5);
console.log(b)

// Map Practice:
// From [2, 4, 6], create a new array where each number is doubled.
let c = [2, 4, 6]
let d = c.map( c => c*2)
console.log(d);



// Find Practice:
// From [3, 8, 15, 7, 20, 21], find the first number greater than 10.
let e = [3, 8, 15, 7, 20, 21]
for ( i =0; i<e.length;  i++){
    if(e[i]>10){
        console.log(e[i]);
        break;
    }
}

// Reduce Practice:
// Use reduce() on [1, 2, 3, 4] to calculate the total sum.
let f = [1, 2, 3, 4]
console.log(f.reduce((acc, val) => acc + val, 0))

// Concat Practice:
// Combine two arrays [1, 2] and [3, 4] into one using both concat() and the spread operator.
let g = [1, 2];
let h = [3, 4];

let combined = [...g, ...h, ...a];
console.log(combined)

// Destructuring Practice:
// Extract the first and second items from ['apple', 'banana', 'cherry'] using array destructuring.

// Splice Practice:
// Given [10, 20, 30, 40], remove 30 and insert 25 in its place using splice().

// Sort Practice:
// Sort the array [40, 10, 30, 20] in ascending order using a compare function.

// 🧩 10 Medium-Level Array Practice Questions

// Remove Duplicates:
// Write a function that removes duplicates from [1, 2, 2, 3, 4, 4, 5].

let duplicate = [1, 2, 2, 3, 4, 4, 5];
let removeDuplicate = [... new Set(duplicate)] ;
console.log("Removed duplicate : ", removeDuplicate)

// Find Max and Min:
// Find the largest and smallest numbers in [10, 5, 8, 20, 3] using array methods.
let max_min = [10, 5, 8, 20, 3]
console.log(`Max : ${Math.max(...max_min)}`)

// Flatten Nested Array:
// Convert [1, [2, [3, 4]], 5] into [1, 2, 3, 4, 5].

// Count Frequency:
// Count how many times each value appears in ['apple', 'banana', 'apple', 'orange'].

// Sum of Even Numbers:
// Calculate the sum of even numbers from [2, 5, 7, 8, 10] using filter() and reduce().

// Sort Objects by Property:
// Sort an array of objects by age:

// [{name:'A', age:30}, {name:'B', age:25}, {name:'C', age:28}]


// Merge Arrays of Objects:
// Merge:

// [{id:1, name:'Aditya'}, {id:2, name:'Rahul'}]
// [{id:1, city:'Mumbai'}, {id:2, city:'Delhi'}]


// into one combined array of objects.

// Extract Unique Values from Nested Arrays:
// From [[1, 2], [2, 3], [3, 4]], get a unique array [1,2,3,4].

// Check All Elements Greater Than 10:
// Use every() to verify if all elements in [12, 15, 9, 20] are greater than 10.

// Transform Array of Strings:
// From ['apple', 'banana'], create an array of objects:
// [{fruit: 'apple'}, {fruit: 'banana'}].