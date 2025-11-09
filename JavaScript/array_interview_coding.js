// Write a function to find the maximum and minimum element in an array.

let input = [4, 7, 2, 9, 1]

// let output = input.sort((a, b) => a - b)

// console.log("Min :", Math.min(...input))
// console.log("Max :", Math.max(...input))

console.log("Min :", input.reduce((acc , curr) => Math.min(acc, curr) ))
console.log("Max :", input.reduce((acc , curr) => Math.max(acc, curr) ))

// an array of numbers, write a program to reverse the array without using the built-in reverse() method.

input =  [1, 2, 3, 4, 5]
let output = new Array

//console.log(input.reverse())

for (let i = input.length - 1 ; i >= 0; i--) {
    output.push(input[i])
}
console.log(output)

// Write a function that takes an array of numbers and returns the sum of all even numbers.

input = [3, 8, 5, 12, 7, 6]
output = input.filter( ( i ) => i % 2 == 0 ).reduce((acc , curr) => acc + curr )

console.log(" sum of all even numbers : ", output)

//Write a function to remove duplicates from an array.
input = [1, 2, 2, 3, 4, 4, 5]
console.log(" remove duplicates from an array : ", [...new Set(input)])

// Write a function that rotates an array k times to the right.
input =  [1, 2, 3, 4, 5]
const k = 2
output = input.splice(input.length - k , input.length)
console.log(" function that rotates an array k times to the right : ", output.concat(input))

//Given an array, return the index of the first non-repeating element. If all repeat, return -1.
input =  [4, 5, 1, 2, 1, 4, 2]

let map = new Map()

for(let num of input){
    map.set(num , (map.get(num) || 0 ) + 1 )
}
console.log(map)
for (let num of input){
    if( map.get(num) === 1 ) console.log(" First non-repeating element : " ,num)
}

//Implement a function to find the second largest element in an array without sorting.
input =  [10, 20, 4, 45, 99]
//output = input.sort((a, b) => a - b)
//console.log("Second largest element in an array : ", output[output.length - 2])
output = input.reduce((acc, curr) => Math.max(acc, curr) )
index = input.indexOf(output)
input.splice(index, 1);
output = input.reduce((acc, curr) => Math.max(acc, curr) )
console.log("Second largest element in an array : ", output)

//Given an array of integers, find all pairs that sum up to a target value.

//Input: [1, 4, 2, 3, 5, 6], target = 7

input =  [1, 4, 2, 3, 5, 6]

input.forEach( ( num, index ) => {
    for(let i = index + 1 ; i < input.length ; i++) {
        if (num + input[i] == 7 ) console.log(" all pairs that sum up to a target value : ", [num , input[i]]);
    }
})

input = [0, 1, 0, 3, 12];

let nonZero = input.filter(num => num !== 0);
let zeros = new Array(input.length - nonZero.length).fill(0);

input = nonZero.concat(zeros);

console.log(input);