let myDate = new Date();
console.log("Current Date and Time: " + myDate.toJSON()); // Current date and time in JSON format
console.log("Year: " + myDate.getFullYear()); // Get the full year (4 digits)
console.log("Month: " + (myDate.getMonth() + 1)); // Get the month (0-11, so add 1)
console.log("Date: " + myDate.getDate()); // Get the day of the month (1-31)

// date and time methods
console.log("Hours: " + myDate.getHours());
console.log("Minutes: " + myDate.getMinutes());
console.log("Seconds: " + myDate.getSeconds());
console.log("Milliseconds: " + myDate.getMilliseconds());
console.log("Day of the Week: " + myDate.getDay()); // 0 (Sunday) to 6 (Saturday)

// UTC methods
console.log("UTC Full Year: " + myDate.getUTCFullYear());
console.log("UTC Month: " + (myDate.getUTCMonth() + 1));
console.log("UTC Date: " + myDate.getUTCDate());
console.log("UTC Hours: " + myDate.getUTCHours());
console.log("UTC Minutes: " + myDate.getUTCMinutes());
console.log("UTC Seconds: " + myDate.getUTCSeconds());

// Setting date and time
myDate.setFullYear(2025);
myDate.setMonth(11); // December (0-11)
myDate.setDate(25); // 25th
myDate.setHours(10);
myDate.setMinutes(30);
myDate.setSeconds(45);
console.log("Updated Date and Time: " + myDate.toJSON());

// Date string methods
console.log("Date String: " + myDate.toDateString());
console.log("Time String: " + myDate.toTimeString());
console.log("Locale Date String: " + myDate.toLocaleDateString());
console.log("Locale Time String: " + myDate.toLocaleTimeString());
console.log("Locale String: " + myDate.toLocaleString());
console.log("ISO String: " + myDate.toISOString());
console.log("UTC String: " + myDate.toUTCString());
console.log("String: " + myDate.toString());
console.log("JSON: " + myDate.toJSON());

// Parsing date strings
let dateString = "2023-12-31T23:59:59Z";
let parsedDate = new Date(Date.parse(dateString));
console.log("Parsed Date: " + parsedDate.toJSON());

// Date difference
let startDate = new Date("2023-01-01");
let endDate = new Date("2023-12-31");
let timeDiff = endDate - startDate; // Difference in milliseconds
let daysDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert to days
console.log("Days between " + startDate.toDateString() + " and " + endDate.toDateString() + ": " + daysDiff + " days");

// Note: JavaScript Date object months are zero-indexed (0 = January, 11 = December)
// This code demonstrates various methods and properties of the JavaScript Date object for handling date and time.