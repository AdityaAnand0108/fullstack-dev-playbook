// 1️⃣ Filter even numbers

// Input: [1,2,3,4,5,6]
// Output: [2,4,6]

let input = [1, 2, 3, 4, 5, 6];

let output = input.filter((num) => num % 2 == 0);

console.log("Even number : ", output);

// 2️⃣ Filter odd numbers

// Input: [10, 11, 12, 13]
// Output: [11,13]

input = [10, 11, 12, 13];

output = input.filter((num) => num % 2 != 0);

console.log("Odd number : ", output);

// 3️⃣ Filter numbers greater than 50

// Input: [10, 55, 60, 25, 80]
// Output: [55,60,80]
input = [10, 55, 60, 25, 80];

output = input.filter((num) => num > 50);

console.log("numbers greater than 50 : ", output);

// 5️⃣ Filter names starting with letter "A"

// Input: ["Aman","Rahul","Asha","Mohit"]
// Output: ["Aman","Asha"]
input = ["Aman", "Rahul", "Asha", "Mohit"];

output = input.filter((c) => c.startsWith("A"));

console.log("Names starting with letter A:", output);


// 7️⃣ Filter words with length greater than 4

// Input: ["React","JS","Hooks","Frontend"]
// Output: ["React","Hooks","Frontend"]
input = ["React","JS","Hooks","Frontend"]

output = input.filter((c) => c.length > 4);

console.log("Names starting with letter A:", output);

// 🧩 Filter students who scored ≥ 80 AND are from "Science" stream

// Input:

const students = [
  { name: "Aman", stream: "Science", marks: 85 },
  { name: "Riya", stream: "Commerce", marks: 90 },
  { name: "Rohit", stream: "Science", marks: 72 },
  { name: "Asha", stream: "Science", marks: 91 }
];

output = students.filter((student) => student.marks >= 80 && student.stream == "Science")
console.log("students who scored ≥ 80 AND are from Science stream:", output);


