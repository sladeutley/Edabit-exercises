// EXERCISE 1

// Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
// Examples
// "edabit", 3 ➞ ["edabit", "edabit", "edabit"]

// 13, 5 ➞ [13, 13, 13, 13, 13]

// "7", 2 ➞ ["7", "7"]

// 0, 0 ➞ []

function repeat(item, times) {
  let arr = [];
  for (let i = 0; i < times; i++) {
    arr.push(item);
  }
  return arr;
}

// TRIED THIS WAY BECAUSE IT SEEMED COO, BUT NOT PASSING ALL THE TESTS
// function repeat(item, times) {
//   return new Array (item.toString().concat(", ").repeat(times - 1) + item.toString());
// }

console.log(repeat("edabit", 3));
console.log(repeat(13, 5));

