for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
  
  const fruits = ["banana", "orange", "apple", "kiwi"];

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

  
  const numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }

  
  const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
  const everyOtherFruit = [];
  
  for (let i = 0; i < fruit.length; i += 2) {
    everyOtherFruit.push(fruit[i]);
  }
  
  console.log(everyOtherFruit); // Output: ["banana", "apple", "pear"]
  