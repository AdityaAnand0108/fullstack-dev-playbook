// 1️⃣ Double each number
let input = [1, 2, 3, 4];
let output = input.map((input) => input * 2);
console.log("Double each number : ", output);

// 2️⃣ Convert all strings to uppercase

input = ["apple", "mango", "banana"];
output = input.map((input) => input.toUpperCase());
console.log("Convert all strings to uppercase : ", output);

// 3️⃣ Add 5 to each number

input = [10, 20, 30];
output = input.map((input) => input + 5);
console.log("Add 5 to each number : ", output);

// 4️⃣ Convert names to greetings

input = ["Aman", "Riya", "John"];
output = input.map((input) => "Hello " + input);
console.log("Convert names to greetings : ", output);

// 5️⃣ Get length of each word

input = ["React", "JS", "Hooks"];
output = input.map((input) => input.length);
console.log("Get length of each word : ", output);

// 6️⃣ Convert numbers to their squares

input = [2, 4, 5];
output = input.map((input) => input * input);
console.log("Convert numbers to their squares : ", output);

// 7️⃣ Append “!” to each word
input = ["hi", "bye", "wow"];
output = input.map((input) => input.concat("!"));
console.log("Append “!” to each word : ", output);

// 8️⃣ Convert boolean values to their opposite
input = [true, false, true, false];
output = input.map((input) => !input);
console.log("Convert boolean values to their opposite : ", output);

// 9️⃣ Increase each salary by 1000

input = [
  { name: "Aman", salary: 5000 },
  { name: "Riya", salary: 7000 },
];
output = input.map(employee => ({
  ...employee,
  salary: employee.salary + 1000
}));
console.log("Increase each salary by 1000 : ", output);

// 🔟 Extract only names from objects

input = [
  { name: "Aman", salary: 5000 },
  { name: "Riya", salary: 7000 },
];
output = input.map(employee => (employee.name));
console.log("Extract only names from objects : ", output);
