

function capitalizeAndLowercase(str) {
  return str.toUpperCase() + str.toLowerCase();
}

// Example usage:
console.log(capitalizeAndLowercase("HelLo")); // Returns "HELLOhello"



function findMiddleIndex(str) {
  return Math.floor(str.length / 2);
}

// Example usage:
console.log(findMiddleIndex("Hello")); // Returns 2
console.log(findMiddleIndex("Hello World")); // Returns 5



function returnFirstHalf(str) {
  const halfIndex = findMiddleIndex(str);
  return str.slice(0, halfIndex);
}

// Example usage:
console.log(returnFirstHalf("Hello")); // Returns "He"
console.log(returnFirstHalf("Hello World")); // Returns "Hello"




function capitalizeLowercaseHalf(str) {
  const halfIndex = Math.floor(str.length / 2);
  const firstHalf = str.slice(0, halfIndex).toUpperCase();
  const secondHalf = str.slice(halfIndex).toLowerCase();
  return firstHalf + secondHalf;
}

// Example usage:
console.log(capitalizeLowercaseHalf("Hello")); // Returns "HEllo"
console.log(capitalizeLowercaseHalf("Hello World")); // Returns "HELLO world"
