const name = "Aditya Anand Mishra"
const age = 20
const country = "India"

function fullDetails() {
    return `My name is ${name}, I'm ${age} years old and I live in ${country}.` // string interpolation - using backticks `` and ${} to embed variables in a string
}

console.log(fullDetails())

/*
notes of string methods:

1. length - returns the length of the string
2. toUpperCase() - converts the string to uppercase
3. toLowerCase() - converts the string to lowercase
4. indexOf() - returns the index of the first occurrence of a specified value in a string
5. lastIndexOf() - returns the index of the last occurrence of a specified value in a string
6. slice() - extracts a part of a string and returns it as a new string
7. substring() - extracts characters from a string between two specified indices
8. replace() - replaces a specified value with another value in a string
9. includes() - checks if a string contains a specified value and returns true or false
10. split() - splits a string into an array of substrings based on a specified separator
11. trim() - removes whitespace from both ends of a string
12. charAt() - returns the character at a specified index in a string
13. charCodeAt() - returns the Unicode
14. concat() - joins two or more strings and returns a new string
15. startsWith() - checks if a string starts with a specified value and returns true or false
16. endsWith() - checks if a string ends with a specified value and returns true or false
17. repeat() - repeats a string a specified number of times and returns a new string
18. search() - searches a string for a specified value and returns the index of the first match
19. match() - searches a string for a specified value and returns an array of matches
20. localeCompare() - compares two strings in the current locale and returns a number indicating whether the reference string comes before, after, or is the same as the given string

*/

// Example usage of some string methods
const exampleString = "  Hello, World! Welcome to JavaScript String Methods.  "

console.log("Length:", exampleString.length) // Length
console.log("Uppercase:", exampleString.toUpperCase()) // toUpperCase
console.log("Lowercase:", exampleString.toLowerCase()) // toLowerCase
console.log("Index of 'World':", exampleString.indexOf("World")) // indexOf
console.log("Last Index of 'o':", exampleString.lastIndexOf("o")) // lastIndexOf
console.log("Slice (7, 12):", exampleString.slice(7, 12)) // slice
console.log("Substring (7, 12):", exampleString.substring(7, 12)) // substring
console.log("Replace 'World' with 'Universe':", exampleString.replace("World", "Universe")) // replace
console.log("Includes 'JavaScript':", exampleString.includes("JavaScript")) // includes
console.log("Split by space:", exampleString.split(" ")) // split
console.log("Trimmed:", exampleString.trim()) // trim
console.log("Character at index 1:", exampleString.charAt(1)) // charAt
console.log("Character code at index 1:", exampleString.charCodeAt(1)) // charCodeAt
console.log("Concatenate with ' Enjoy!':", exampleString.concat(" Enjoy!")) // concat
console.log("Starts with '  Hello':", exampleString.startsWith("  Hello")) // startsWith
console.log("Ends with 'Methods.  ':", exampleString.endsWith("Methods.  ")) // endsWith
console.log("Repeat 2 times:", exampleString.trim().repeat(2)) // repeat
console.log("Search for 'JavaScript':", exampleString.search("JavaScript")) // search
console.log("Match for 'o':", exampleString.match(/o/g)) // match
console.log("Locale Compare with '  Hello, World!':", exampleString.localeCompare("  Hello, World!")) // localeCompare