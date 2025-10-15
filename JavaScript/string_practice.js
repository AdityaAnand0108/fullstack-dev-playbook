//🧠 Practice Questions (Basic → Medium)

//✅ Reverse a string without using built-in reverse methods.
 const str = "hello";
 console.log(str.split("").reverse().join(""));

//✅ Check if a string is palindrome.
const str1 = "ADDA"
console.log(str1 == str1.split("").reverse().join(""));

//✅ Count vowels and consonants.
const str2 = "hello world";
let vowels = 0, consonants = 0;
for (let c of str2.toLowerCase()) {
    if (/[a-z]/.test(c)) {
        if ("aeiou".includes(c)) vowels++;
        else consonants++;
    }
}
console.log({ vowels, consonants });

//✅ Find the first non-repeating character.
const str3 = "Aditya anand"
for (let c of str3.toLowerCase()){
 if(str3.toLowerCase().indexOf(c) == str3.toLowerCase().lastIndexOf(c)){
 console.log(c);
 break;
 }
}

//✅ Given a sentence, capitalize the first letter of each word.
let str4 = "aditya anand mishra";
let capitalized = str4
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized);
