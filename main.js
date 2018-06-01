// // EXERCISE 1

// // Repeat the Same Item Multiple Times
// // Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
// // Examples
// // "edabit", 3 ➞ ["edabit", "edabit", "edabit"]

// // 13, 5 ➞ [13, 13, 13, 13, 13]

// // "7", 2 ➞ ["7", "7"]

// // 0, 0 ➞ []

// function repeat(item, times) {
//   let arr = [];
//   for (let i = 0; i < times; i++) {
//     arr.push(item);
//   }
//   return arr;
// }

// // TRIED THIS WAY BECAUSE IT SEEMED COO, BUT NOT PASSING ALL THE TESTS
// // function repeat(item, times) {
// //   return new Array (item.toString().concat(", ").repeat(times - 1) + item.toString());
// // }

// // THIS WAY DIDN't PASS EITHER
// // function repeat(item, times) {
// //   let string = item.toString().concat(" ").repeat(times - 1) + item.toString()
// //   return new Array (string.split(" "));
// // }

// console.log(repeat("edabit", 3));
// console.log(repeat(13, 5));

// ********************************************************************************

// // EXERCISE 2

// // Is the Number Less than or Equal to Zero?
// // Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
// // Examples
// // 5 ➞ false

// // 0 ➞ true

// // -2 ➞ true

// // 1 ➞ false

// function lessThanOrEqualToZero(num) {
//   if (num <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lessThanOrEqualToZero(8));
// console.log(lessThanOrEqualToZero(-8));
// console.log(lessThanOrEqualToZero(0));

// ********************************************************************************

// // EXERCISE 3

// // Is the Number Even or Odd?
// // Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
// // Examples
// // 3 ➞ "odd"

// // 146 ➞ "even"

// // 19 ➞ "odd"

// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(isEvenOrOdd(11));
// console.log(isEvenOrOdd(12));
// console.log(isEvenOrOdd(0));


// ********************************************************************************


// // EXERCISE 4

// // Find the Smallest Number in an Array
// // Create a function that takes an array of numbers and returns the smallest number in the set.
// // Examples
// // [34, 15, 88, 2] ➞ 2

// // [34, -345, -1, 100] ➞ -345

// // [-76, 1.345, 1, 0] ➞ -76

// // [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999

// // [7, 7, 7] ➞ 7

// let findSmallestNumInArray = arr => {
//   // return Math.min.apply(null, arr);
//   return Math.min(...arr);
// }

// console.log(findSmallestNumInArray([5, -5, 0, 1, 9]));

// ********************************************************************************

// // EXERCISE 5

// // Get Word Count
// // Create a function that takes a string and returns the word count. The string will be a sentence.
// // Examples
// // "Just an example here move along" ➞ 6

// // "This is a test" ➞ 4

// // "What an easy task, right" ➞ 5


// function countWords(str) {
//   return str.split(" ").length;
// }

// console.log(countWords("You are awesome!"));

// ********************************************************************************

// EXERCISE 6

// Shuffle the Name
// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
// Examples
// "Donald Trump" ➞ "Trump Donald"

// "Rosie O'Donnell" ➞ "O'Donnell Rosie"

// "Seymour Butts" ➞ "Butts Seymour"

function nameShuffle(str) {
	return str.split(" ").reverse().join(" ");
}

console.log(nameShuffle("Jeremy A Renner"));