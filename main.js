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

// // EXERCISE 25

// // Return the Middle Character(s) of a String
// // Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
// // Examples
// // "test" ➞ "es"

// // "testing" ➞ "t"

// // "middle" ➞ "dd"

// // "A" ➞ "A"
// // Notes
// // All test cases contain a single word (as a string).

// // *********SOLUTION*************

// function getMiddle(str) {
//   let strArray = str.split("")
//   if (strArray.length % 2 === 0) {
//     let slice1Index = (strArray.length / 2) - 1;
//     let slice2Index = (strArray.length / 2) + 1;
//     return strArray.slice(slice1Index, slice2Index).join("");
//   }
//   if (strArray.length % 2 !== 0) {
//     let sliceIndex = Math.floor(strArray.length / 2);
//     return strArray.slice(sliceIndex, sliceIndex + 1).join("");
//   }
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("A"));
// ********************************************************************************

// // EXERCISE 26

// // Multiply By Length
// // -Create a function to multiply all values in an array by the amount of values in that array
// // Example(2, 3, 1, 0 becomes 8,12,4,0) NOTE: All values are numbers.

// // *********SOLUTION*************

// function MultiplyByLength(arr) {
// 	return arr.map(num => num * arr.length)
// }

// console.log(MultiplyByLength([2, 3, 1, 0]));
// ********************************************************************************

// // EXERCISE 27

// // Sort Numbers in Ascending Order
// // Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// // Rules
// // Sort numbers array in ascending order.
// // If functions argument is null, an empty array or undefined, return an empty array.
// // Return new array of sorted numbers.
// // Examples
// // [1, 2, 10, 50, 5] ➞ [1, 2, 5, 10, 50]

// // [80, 29, 4, -95, -24, 85] ➞ [-95, -24, 4, 29, 80, 85]

// // null ➞ []

// // [] ➞ []
// // Notes
// // The numbers being passed to sortNumsAscending() can be positive or negative.

// // *********SOLUTION*************

// function sortNumsAscending(arr) {
//   if (arr === null) {
//     return [];
//   } else return arr.sort((a, b) => a - b);
// }

// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));
// console.log(sortNumsAscending(null));
// ********************************************************************************

// // EXERCISE 27

// // Find the Minimum, Maximum, Length and Average Values
// // Create a function that takes an array of numbers and returns the following statistics:
// // Minimum Value
// // Maximum Value
// // Sequence Length
// // Average Value
// // Examples
// // [6, 9, 15, -2, 92, 11] ➞ [-2, 92, 6, 21.833333333333332]

// // [30, 43, 20, 92, 3, 74] ➞ [3, 92, 6, 43.666666666666664]

// // [4.54, 8.32, 5.20] ➞ [4.54, 8.32, 3, 6.02]

// // *********SOLUTION*************

// // *********OPTION 1*************

// function minMaxLengthAverage(arr) {
//   let newArr = [];
//   newArr.push(Math.min(...arr));
//   newArr.push(Math.max(...arr));
//   newArr.push(arr.length);
//   newArr.push((arr.reduce((a,b) => a + b)) / arr.length)
//   return newArr;
// }

// console.log(minMaxLengthAverage([6, 9, 15, -2, 92, 11]));

// // ************OPTION 2*********************************

// function minMaxLengthAverage(arr) {
//   return [Math.min(...arr), Math.max(...arr), arr.length, (arr.reduce((sum, n) => sum + n)) / arr.length];
// }

// ********************************************************************************

// // EXERCISE 28

// // Format Number with Comma(s) Separating Thousands
// // Create a function that takes a number as an argument and returns a string formatted to separate thousands.
// // Examples
// // 1000 ➞ "1,000"

// // 100000 ➞ "100,000"

// // 20 ➞ "20"

// // *********SOLUTION*************

// function formatNum(num) {
// 	return num.toLocaleString();
// }

// console.log(formatNum(1000))
// console.log(formatNum(100000))

// ********************************************************************************

// // EXERCISE 29

// // Return the Sum of the Two Smallest Numbers
// // Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
// // Examples
// // [19, 5, 42, 2, 77] ➞ 7

// // [10, 343445353, 3453445, 3453545353453] ➞ 3453455

// // [2, 9, 6, -1] ➞ 8

// // [879, 953, 694, -847, 342, 221, -91, -723, 791, -587] ➞ 563

// // [3683, 2902, 3951, -475, 1617, -2385] ➞ 4519
// // Notes
// // Don't count negative numbers.
// // Floats and empty arrays will not be used in any of the test cases.

// // // *********SOLUTION*************

// function sumTwoSmallestNums(arr) {
//   let positiveArr = [];
//   arr.forEach(num => {
//     if (num >= 0) {
//       positiveArr.push(num);
//     }
//   });
//   positiveArr = positiveArr
//     .sort((a, b) => a - b)
//     .slice(0, 2)
//     .reduce((a, b) => a + b);
//   return positiveArr;
// }

// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));

// ********************************************************************************

// // EXERCISE 30

// // Return the Highest and Lowest Numbers
// // Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
// // Examples
// // "1 2 3 4 5" ➞ "5 1"

// // "1 2 -3 4 5" ➞ "5 -3"

// // "1 9 3 4 -5" ➞ "9 -5"

// // "13" ➞ "13 13"

// // Notes
// // All numbers are valid Int32, no need to validate them.
// // There will always be at least one number in the input string.
// // Output string must be two numbers separated by a single space, and highest number is first.

// // *********SOLUTION***************

// // // *********OPTION 1*************

// function highLow(str) {
//   let newArr = [];
//   str.split(" ").forEach(num => {
//     newArr.push(+num)
//   })
//   let strArr = [Math.max(...newArr), Math.min(...newArr)].join(" ");
//   return strArr;
// }

// console.log(highLow("1 9 3 4 -5"))
// console.log(highLow("13"))

// // // *********OPTION 2*************

// function highLow(str) {
//   return [Math.max(... str.split(' ')), Math.min(... str.split(' '))].join(' ');
// }

// ********************************************************************************

// // EXERCISE 31

// // H4ck3r Sp34k
// // Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// // Examples
// // "javascript is cool" ➞ "j4v45cr1pt 15 c00l"

// // "programming is fun" ➞ "pr0gr4mm1ng 15 fun"

// // "become a coder" ➞ "b3c0m3 4 c0d3r"
// // Notes
// // In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// // *********SOLUTION***************

// function hackerSpeak(str) {
//   return str.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).replace(/s/gi, 5);
// }

// console.log(hackerSpeak("javascript is cool"))
// console.log(hackerSpeak("become a coder"))

// ********************************************************************************

// // EXERCISE 32

// // Return the Factorial
// // Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
// // Examples
// // 3 ➞ 6

// // 5 ➞ 120

// // 13 ➞ 6227020800
// // Notes
// // Assume all inputs are >= 0.
// // 0! = 1.

// // *********SOLUTION***************

// function factorial(int) {
//   let result = 1;
//   for (let i = 1; i <= int; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(13));
// console.log(factorial(1));

// ********************************************************************************

// // EXERCISE 33

// // Phone Number Formatting
// // Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// // Examples
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ➞ "(123) 456-7890"

// // [5, 1, 9, 5, 5, 5, 4, 4, 6, 8] ➞ "(519) 555-4468"

// // [3, 4, 5, 5, 0, 1, 2, 5, 2, 7] ➞ "(345) 501-2527"
// // Notes
// // Don't forget the space after the closing parenthese.

// // *********SOLUTION***************

// function formatPhoneNumber(numbers) {
// 	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// ********************************************************************************

// // EXERCISE 34

// // Find the Missing Number
// // Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// // Examples
// // [1, 2, 3, 4, 6, 7, 8, 9, 10] ➞ 5

// // [7, 2, 3, 6, 5, 9, 1, 4, 8] ➞ 10

// // [10, 5, 1, 2, 4, 6, 8, 3, 9] ➞ 7
// // Notes
// // The array of numbers will be unsorted (not in order).
// // Only one number will be missing.

// // *********SOLUTION***************

// // OPTION 1

// function missingNums(arr) {
//   let missingNum = null;
//   let sortedArr = arr.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArr.length + 1; i++) {
//     if (sortedArr[i] !== i + 1) {
//       missingNum = i + 1;
//       break;
//     }
//   }
//   return missingNum;
// }

// // OPTION 2

// const missingNums = (arr) => {
//   for (let i = 1; i <= arr.length + 1; i++) {
//     if (arr.indexOf(i) === -1) return i;
//   }
// }

// console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// ********************************************************************************

// // EXERCISE 35

// // X's and O's
// // Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
// // Rules
// // Return a boolean value (true or false).
// // The string can contain any character.
// // When neither an x nor an o is in the string, return true.
// // Examples
// // "ooxx" ➞ true

// // "xooxx" ➞ false

// // "ooxXm" ➞ true (case insensitive)

// // "zpzpzpp" ➞ true (returns true if no x and o)

// // "zzoo" ➞ false
// // Notes
// // Remember to return true if there aren't any x's or o's.
// // Must be case insensitive.

// // *********SOLUTION***************

// // OPTION 1

// function XO(str) {
//   let counterX = 0;
//   let counterO = 0;
//   let xoArr = str.split("");
//   xoArr.forEach(letter => {
//     if (letter.includes("x") || letter.includes("X")) {
//       counterX++;
//     } else if (letter.includes("o") || letter.includes("O")) {
//       counterO++;
//     }
//   });
//   return counterX === counterO;
// }

// console.log(XO("ooxXm"));

// // OPTION 2

// function XO(str) {
//   return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
// }

// // OPTION 3

// function XO(str) {
//   let x = str.toLowerCase().split('').filter(x => x === 'x').length;
//   let o = str.toLowerCase().split('').filter(x => x === 'o').length;
//   return x === o;
// }

// ********************************************************************************

// // EXERCISE 36

// // Wurst Is Better
// // Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.
// // Examples of German Wursts
// // Bratwurst
// // Kochwurst
// // Leberwurst
// // Mettwurst
// // Rostbratwurst
// // List of sausages that need to turn into "Wurst"
// // Kielbasa
// // Chorizo
// // Moronga
// // Salami
// // Sausage
// // Andouille
// // Naem
// // Merguez
// // Gurka
// // Snorkers
// // Pepperoni
// // Rules
// // Replace every mention of any sausage from the above list, with the word "Wurst"
// // Do not replace any German sausage with the word "Wurst"
// // The word "Wurst" must be titlecase
// // Return the Wurst-ified string
// // Examples
// // "I like chorizos, but not sausages" ➞ "I like Wursts, but not Wursts"

// // "Bratwurst and Rostbratwurst are sausages" ➞ "Bratwurst and Rostbratwurst are Wursts"
// // Notes
// // All test cases contain valid strings. All German sausage names in test cases contain the word "wurst".

// // *********SOLUTION***************

// function wurstIsBetter(str) {
// 	return str.replace(/kielbasa|chorizo|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni/gi, 'Wurst');
// }

// console.log(wurstIsBetter("I like chorizos, but not sausages"));
// ********************************************************************************

// //EXERCISE 37

// // Sort Numbers in Descending Order
// // Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
// // Examples
// // 123 ➞ 321

// // 1254859723 ➞ 9875543221

// // 73065 ➞ 76530
// // Notes
// // You can expect non-negative numbers for all test cases.

// // ***********SOLUTION*****************

// function sortDecending(num) {
// 	return +num.toString().split("").sort((a,b) => b - a).join("");
// }

// console.log(sortDecending(73065));

// ********************************************************************************

// //*** EXERCISE 38

// // Count Ones in Binary Representation of Integer
// // Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.
// // Examples
// // 0 ➞ 0

// // 100 ➞ 3

// // 999 ➞ 8
// // Notes
// // The input will always be a valid integer (number).

// // ***********SOLUTION*****************

// function countOnes(i) {
// 	return i.toString(2).replace(/0/g, "").length
// }

// console.log(countOnes(999));
// console.log(countOnes(12));

// ********************************************************************************

// EXERCISE 39

// // Capitalize the Names
// // Create a function that takes an array of names and returns an array with the first letter capitalized.
// // Examples
// // ["mavis", "senaida", "letty"] ➞ ["Mavis", "Senaida", "Letty"]

// // ["samuel", "MABELLE", "letitia", "meridith"] ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// // ["Slyvia", "Kristal", "Sharilyn", "Calista"] ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// // Notes
// // Don't change the order of the original array.
// // Notice in the second example above, "MABELLE" is returned as "Mabelle".

// // // ***********SOLUTION*****************

// // *****OPTION 1*********

// function capMe(arr) {
// 	return arr.map(word => word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase())
// }

// // ******OPTION 2**********

// function capMe(arr) {
//   let capArr = [];
//   arr.forEach(word => {
//     capArr.push(
//       word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
//     );
//   });
//   return capArr;
// }

// console.log(capMe(["mavis", "senaida", "letty"]));
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));

// ********************************************************************************

// // EXERCISE 40

// // Maskify the String
// // Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
// // Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
// // Examples
// // "4556364607935616" ➞ "############5616"

// // "64607935616" ➞ "#######5616"

// // "1" ➞ "1"

// // "" ➞ ""
// // Notes
// // The maskify function must accept a string of any length.
// // An empty string should return an empty string (fourth example above).

// // // ***********SOLUTION*****************

// function maskify(str) {
//   if (str.length <= 4) {
//     return str;
//   } else return str.substring(0, str.length-4).replace(/[^ ]/g, "#") + str.substring(str.length - 4)
// }

// ////////// OPTION 2//////////////

// function maskify(str) {
//   return str.length > 4 ? '#'.repeat(str.length - 4) + str.substr(str.length - 4) : str;
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify("1"));
// console.log(maskify("12asdfasdf45234"));

// ********************************************************************************

// EXERCISE 41

// Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:
// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
// Examples
// "Cat, dog, and mouse." ➞ ".at, dog, and mouseC"

// "ada" ➞ "Two's a pair."

// "Ada" ➞ "adA"

// "z" ➞ "Incompatible."

// [1, 2, 3] ➞ "Incompatible."
// Notes
// Tests are case sensitive (e.g. "A" and "a" are not the same character).

// // // ***********SOLUTION*****************

function flipEndChars(str) {
  console.log('str[0]',str[0]);
  if (str.length > 1 && typeof str === "string") {
    if (str.charAt(0) === str.charAt(str.length - 1)) {
      return "Two's a pair.";
    } else
      return (
        str.charAt(str.length - 1) +
        str.substring(1, str.length - 1) +
        str.charAt(0)
      );
  } else if (str.length <= 1 || typeof str !== "string") {
    return "Incompatible.";
  }
}

console.log(flipEndChars("Cat, dog, and mouse."));
console.log(flipEndChars("hello"));
console.log(flipEndChars("z"));
console.log(flipEndChars([1, 2]));

// ********************************************************************************
