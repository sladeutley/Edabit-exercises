// // EXERCISE 1

// // Repeat the Same Item Multiple Times
// // Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
// // Examples
// // "edabit", 3 ➞ ["edabit", "edabit", "edabit"]

// // 13, 5 ➞ [13, 13, 13, 13, 13]

// // "7", 2 ➞ ["7", "7"]

// // 0, 0 ➞ []

// *****SOLUTION******

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

// *****SOLUTION******

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

// *****SOLUTION******

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

// *****SOLUTION******

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

// *****SOLUTION******

// function countWords(str) {
//   return str.split(" ").length;
// }

// console.log(countWords("You are awesome!"));

// ********************************************************************************

// // EXERCISE 6

// // Shuffle the Name
// // Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.
// // Examples
// // "Donald Trump" ➞ "Trump Donald"

// // "Rosie O'Donnell" ➞ "O'Donnell Rosie"

// // "Seymour Butts" ➞ "Butts Seymour"

// *****SOLUTION******

// function nameShuffle(str) {
// 	return str.split(" ").reverse().join(" ");
// }

// console.log(nameShuffle("Jeremy A Renner"));

// ********************************************************************************

// // EXERCISE 7

// // Flip the Boolean
// // Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
// // Examples
// // true ➞ false

// // false ➞ true

// // 0 ➞ "boolean expected"

// // null ➞ "boolean expected"

// *****SOLUTION******

// function reverse(bool) {
// 	if (bool === true) {
//     return false;
//   } else if (bool === false) {
//     return true;
//   } else return "boolean expected";
// }

// console.log(reverse(true))
// console.log(reverse(false))
// console.log(reverse(0))

// //  OTHER SOLUTION I LIKED

// // function reverse(bool) {
// // 	if (typeof bool !== 'boolean') return "boolean expected"
// //   return !bool
// // }

// ********************************************************************************

// // EXERCISE 8

// // Check if String Ending Matches Second String
// // Create a function that takes two strings and returns true if the first argument ends with the second argument; otherewise return false .
// // Rules
// // Take two strings as arguments.
// // Determine if second string matches ending of first string.
// // Return boolean value.

// // *****SOLUTION******

// function checkEnding(str1, str2) {
//   let lastLettersOfStr1 = str1
//     .split("")
//     .slice(str1.length - str2.length)
//     .join("");
//   if (lastLettersOfStr1 === str2) {
//     return true;
//   } else return false;
// }

// console.log(checkEnding("feminine", "nine"));
// console.log(checkEnding("convention", "tio"));
// console.log(checkEnding("abc", "C"));

// // // //  OTHER SOLUTION I LIKED
// // function checkEnding(str1, str2) {
// //   return str1.endsWith(str2);
// // }

// // // OR JUST SLICE THE STRING
// // function checkEnding(str1, str2) {
// //   return str1.slice(-(str2.length)) === str2;
// // }

// ********************************************************************************

// // EXERCISE 9

// // Alphabet Soup
// // Create a function that takes a string and returns a string with its letters in alphabetical order.
// // Examples
// // "hello" ➞ "ehllo"

// // "edabit" ➞ "abdeit"

// // *****SOLUTION******

// function AlphabetSoup(str) {
// 	return str.split("").sort().join("");
// }

// console.log(AlphabetSoup("hello"));

// ********************************************************************************

// // EXERCISE 10

// // Find the Smallest and Biggest Numbers
// // Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// // Examples
// // [1, 2, 3, 4, 5] ➞ [1, 5]

// // [2334454, 5] ➞ [5, 2334454]

// // [1] ➞ [1, 1]
// // Notes
// // All test arrays will have at least one element and are valid.

// // // *****SOLUTION******

// // function minMax(arr) {
// //   let minMaxArr = [];
// //   minMaxArr.push(Math.min(...arr));
// //   minMaxArr.push(Math.max(...arr));
// //   return minMaxArr;
// // }

// // OR 

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// ********************************************************************************

// // EXERCISE 11

// // Filter out Strings from an Array
// // Create a function that takes an array of positive numbers and strings and returns a new array without the strings. In other words, remove all strings from an array of elements.
// // Filter out all strings.
// // Return only numbers.
// // Examples
// // [1, 2, "a", "b"] ➞ [1, 2]

// // [1, "a", "b", 0, 15] ➞ [1, 0, 15]

// // [1, 2, "aasf", "1", "123", 123] ➞ [1, 2, 123]

// // // *****SOLUTION******

// function filterArray(arr) {
//   return arr.filter(el => typeof el === 'number');
// }

// console.log(filterArray([1, 2, "a", "b"]));

// ********************************************************************************

// EXERCISE 12

// Is it Time for Milk and Cookies?
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// Examples
// Date( 2013, 11, 24 ) ➞ true

// Date( 2013, 0, 23 ) ➞ false

// Date( 3000, 11, 24 ) ➞ true

// // *****SOLUTION******

function timeForMilkAndCookies(date) {
	return date.getMonth() === 11 && date.getDate() === 24;
}

console.log(timeForMilkAndCookies(2013, 11, 24))