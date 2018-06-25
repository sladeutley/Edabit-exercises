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

// // Is it Time for Milk and Cookies?
// // Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// // Examples
// // Date( 2013, 11, 24 ) ➞ true

// // Date( 2013, 0, 23 ) ➞ false

// // Date( 3000, 11, 24 ) ➞ true

// // // *****SOLUTION******

// function timeForMilkAndCookies(date) {
// 	return date.getMonth() === 11 && date.getDate() === 24;
// }

// console.log(timeForMilkAndCookies(2013, 11, 24))

// ********************************************************************************

// // EXERCISE 13

// // Add up the Numbers from a Single Number
// // Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// // Examples
// // 4 ➞ 10

// // 13 ➞ 91

// // 600 ➞ 180300

// // // *****SOLUTION******

// function addUp(num) {
//   let result = 0;
//   for (let i = 0; i <= num; i++) {
//     result += i;
//   }
//   return result;
// }

// console.log(addUp(4));

// ********************************************************************************

// EXERCISE 14

// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Examples
// "Celebration" ➞ 5

// "Palm" ➞ 1

// "Prediction" ➞ 4

// *********SOLUTION*************

// function countVowels(str) {
//   count = 0;
//   str.toLowerCase().split("").forEach(letter => {
//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//       count++;
//     }
//   })
//   return count;
// }

// console.log(countVowels("Celebration"));

// ********************************************************************************

// // EXERCISE 15

// // Repeating Letters
// // Create a function that takes a string and returns a string in which each character is repeated once.
// // Examples
// // "String" ➞ "SSttrriinngg"

// // "Hello World!" ➞ "HHeelllloo  WWoorrlldd!!"

// // "1234!_ " ➞ "11223344!!__  "

// // *********SOLUTION*************

// function doubleChar(str) {
// 	return str.split("").map(letter => letter + letter).join("");
// }

// console.log(doubleChar("String"));

// ********************************************************************************

// // EXERCISE 16

// // Eliminate Odd Numbers within an Array
// // Create a function that takes an array of numbers and returns only the even values.
// // Examples
// // [1, 2, 3, 4, 5, 6, 7, 8] ➞ [2, 4, 6, 8]

// // [43, 65, 23, 89, 53, 9, 6] ➞ [6]

// // [718, 991, 449, 644, 380, 440] ➞ [718, 644, 380, 440]

// // *********SOLUTION*************

// function noOdds(arr) {
// 	return arr.filter(num => num % 2 === 0);
// }

// console.log(noOdds([43, 65, 23, 89, 53, 9, 6]))

// ********************************************************************************

// // EXERCISE 17

// // Head-Body-Tail
// // Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".
// // Examples
// // "Onomatopeia", "on", "mato", "ia" ➞ "Incomplete."

// // "Centipede", "Cent", "tip", "pede" ➞ "My head, body, and tail."

// // "apple", "AP", "PPL", "LE" ➞ "Incomplete."
// // Notes
// // You'll always get exactly four strings as arguments.
// // Tests are case sensitive.

// // *********SOLUTION*************

// function verifySubstrs(mainStr, head, body, tail) {
//   if (
//     mainStr.startsWith(head) &&
//     mainStr.includes(body) &&
//     mainStr.endsWith(tail)
//   ) {
//     return "My head, body, and tail.";
//   } else return "Incomplete.";
// }

// console.log(verifySubstrs("Onomatopeia", "on", "mato", "ia"));
// console.log(verifySubstrs("Centipede", "Cent", "tip", "pede"));
// ********************************************************************************

// // EXERCISE 18

// // Pi to N Decimal Places
// // Given a number n, write a function that returns PI to n decimal places.
// // Examples
// // 5 ➞ 3.14159

// // 4 ➞ 3.1416

// // 15 ➞ 3.141592653589793
// // Notes
// // n will not be above 15, to keep this challenge simple.
// // Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
// // The return value must be a number, not a string.

// // // *********SOLUTION*************

// function myPi(n) {
// 	return +(Math.PI).toFixed(n)
// }

// ********************************************************************************

// // EXERCISE 19

// // Return the Four Letter Strings
// // Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
// // Examples
// // ["Ryan", "Kieran", "Jason", "Matt"] ➞ ["Ryan", "Matt"]

// // ["Tomato", "Potato", "Pair"] ➞ ["Pair"]

// // ["Kangaroo", "Bear", "Fox"] ➞ ["Bear"]
// // Notes
// // You can expect valid strings for all test cases.

// // *********SOLUTION*************

// function isFourLetters(arr) {
// 	return arr.filter(word => word.length === 4)
// }

// console.log(isFourLetters(["Tomato", "Potato", "Pair"]))

// ********************************************************************************

// // EXERCISE 20

// // Absolutely Sum
// // Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// // Examples
// // [2, -1, 4, 8, 10] ➞ 25

// // [-3, -4, -10, -2, -3] ➞ 22

// // [2, 4, 6, 8, 10] ➞ 30

// // [-1] ➞ 1

// // *********SOLUTION*************

// function getAbsSum(arr) {
//   return arr.map(num => Math.abs(num)).reduce((a,b) => a + b)
// }

// console.log(getAbsSum([2, -1, 4, 8, 10]))

// ********************************************************************************

// // EXERCISE 21

// // Remove Every Vowel from a String
// // Create a function that takes a string and returns a new string with all vowels removed.
// // Examples
// // "I have never seen a thin person drinking Diet Coke." ➞ " hv nvr sn  thn prsn drnkng Dt Ck.")

// // "We're gonna build a wall!" ➞ "W'r gnn bld  wll!"

// // "Happy Thanksgiving to all--even the haters and losers!" ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// // Notes
// // "y" is not considered a vowel.
// // Expect a valid string for all test cases.

// // *********SOLUTION*************

// function silenceTrump(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }

// // OR

// // function silenceTrump(str) {
// //   return str.replace(/[aeiou]/gi, "");
// // }

// console.log(silenceTrump("We're gonna build a wall!"));

// ********************************************************************************

// // EXERCISE 22

// // Find the Largest Numbers in a Group of Arrays
// // Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// // Examples
// // [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]] ➞ [7, 90, 2]

// // [[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]] ➞ [-34, -2, 7]

// // [[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]] ➞ [0.7634, 9.32, 9]
// // Notes
// // Watch out for negative integers (numbers).

// // *********SOLUTION*************

// function findLargestNums(arr) {
//   return arr.map(numbers => Math.max(...numbers));
// }

// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));

// ********************************************************************************

// // EXERCISE 23

// // Is the Number a Prime?
// // Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// // Examples
// // 7 ➞ true

// // 9 ➞ false

// // 10 ➞ false
// // Notes
// // 1 is not a prime number.
// // If a number is odd it is not divisible by an even number.

// // // *********SOLUTION*************

// // ****OPTION 1*******

// // function isPrime(num) {
// //   if (num === 1) {
// //     return false;
// //   }
// //   for (let i = 2; i < num; i++) {
// //     if (num%i === 0) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// // ****OPTION 2*******

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num%i === 0) {
//       // AS SOON AS THIS IF STATEMENT IS TRUE, THE LOOP BREAKS AND RETURNS FALSE
//       return false;
//     } 
//   }
//     return num !== 1
// }

// console.log(isPrime(7));
// console.log(isPrime(9));
// console.log(isPrime(29));
// console.log(isPrime(102));
// console.log(isPrime(1));

// ********************************************************************************

// // EXERCISE 24

// // Calculate the Mean
// // Create a function that takes an array of numbers and returns the mean value.
// // Examples
// // [1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3] ➞ 2.54

// // [2, 3, 2, 3] ➞ 2.50

// // [3, 3, 3, 3, 3] ➞ 3.00
// // Notes
// // Round to two decimal places.
// // You can expect an integer ranging from 0 to 10000.

// // *********SOLUTION*************

// function mean(arr) {
// 	return +(arr.reduce((a,b) => (a + b)) / arr.length).toFixed(2)
// }

// console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));

// ********************************************************************************

// // EXERCISE 25

// // Equality of 3 Values
// // Write a function that takes three input values (a, b, c) and returns the number of equal values.
// // Examples
// // 3, 4, 3 ➞ 2

// // 1, 1, 1 ➞ 3

// // 3, 4, 1 ➞ 0 
// // Notes
// // Your function must return 0, 2 or 3.

// // // *********SOLUTION*************

// function equal(a, b, c) {
//   let counter = 0;
//   if (a === b) counter++;
//   if (a === c) counter++;
//   if (b === a) counter++;
//   if (b === c) counter++;
//   if (c === a) counter++;
//   if (c === b) counter++;
//   if ((a === b) && (a === c) && (b === c)) {
//     return 3;
//   }  
//   return counter;
// }

// console.log(equal(3, 4, 3))
// console.log(equal(3, 3, 3))

// // COOL WAY TO GET RID OF DUPLICATES IN AN ARRAY

// const myArray = [1, 1, 1, 2, 3, 4, 4, 4, 5, 5]


// const removeDupes = (arr) => {

//   return [...new Set(arr)]

// }

// console.log(removeDupes(myArray));

// ********************************************************************************

// EXERCISE 25

// *********SOLUTION*************

// ********************************************************************************
