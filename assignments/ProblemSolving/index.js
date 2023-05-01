


function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}


const numbers = [3, 5, 2, 8, 1];
const largest = findLargest(numbers);
console.log(largest); // Output: 8


function lettersWithStrings(strings, character) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].indexOf(character) !== -1) {
        result.push(strings[i]);
      }
    }
    return result;
  }

console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")); // Output: ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")); // Output: ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")); // Output: []


function isDivisible(num1, num2) {
    return num1 % num2 === 0;
  }

console.log(isDivisible(4, 2));    // Output: true
console.log(isDivisible(9, 3));    // Output: true
console.log(isDivisible(15, 4));   // Output: false
