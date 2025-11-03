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
output = input.map((employee) => ({
  ...employee,
  salary: employee.salary + 1000,
}));
console.log("Increase each salary by 1000 : ", output);

// 🔟 Extract only names from objects

input = [
  { name: "Aman", salary: 5000 },
  { name: "Riya", salary: 7000 },
];
output = input.map((employee) => employee.name);
console.log("Extract only names from objects : ", output);

// 1️⃣ Full Name Mapping
input = [
  { first: "Aman", last: "Kumar" },
  { first: "Riya", last: "Sharma" },
];
output = input.map((employee) => employee.first + employee.last);
console.log("Full Name Mapping : ", output);

// 2️⃣ Grades Based on Marks
input = [95, 82, 67, 74];
output = input.map((input) => {
  if (input >= 90) return "A";
  if (input >= 75) return "B";
  else return "C";
});
console.log("Grades Based on Marks : ", output);

// 3️⃣ String + Length Object
input = ["React", "JavaScript", "HTML"];
output = input.map((input) => ({
  Word: input,
  length: input.length,
}));
console.log("String + Length Object : ", output);

// 4️⃣ Add Index to Names
input = ["Aman", "Riya", "John"];
let count = 0;
output = input.map((input) => input + "-" + count++);
console.log("String + Length Object : ", output);

// 5️⃣ Format Date from Timestamps
input = [1672531200000, 1672617600000];
output = input.map((input) => new Date(input).toLocaleDateString());
console.log("Format Date from Timestamps : ", output);

// 6️⃣ Assign ID to Each User
input = [{ name: "Aman" }, { name: "Riya" }, { name: "John" }];
count = 0;
output = input.map((input) => ({
  id: ++count,
  ...input,
}));
console.log("Assign ID to Each User : ", output);

// 7️⃣ Map Numbers → "even"/"odd"
input = [1, 2, 3, 4, 5];
output = input.map((input) => {
  if (input % 2 == 0) return "even";
  else return "odd";
});
console.log("Map Numbers → even/odd : ", output);

// 8️⃣ Check Adult or Minor
input = [
  { name: "Aman", age: 22 },
  { name: "Riya", age: 16 },
];
output = input.map((input) => ({
  name: input.name,
  isAdult: input.age > 18 ? true : false,
}));
console.log("Check Adult or Minor : ", output);

// 9️⃣ Calculate Discounted Price
input = [
  { item: "Laptop", price: 50000 },
  { item: "Phone", price: 20000 },
];
output = input.map((input) => ({
  ...input,
  price: input.price - (input.price * 10) / 100,
}));
console.log("Calculate Discounted Price : ", output);
