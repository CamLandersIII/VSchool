


function fizzBuzzTally() {
    let tally = {
      fizz: 0,
      buzz: 0,
      fizzbuzz: 0
    };
  
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        tally.fizzbuzz++;
      } else if (i % 3 === 0) {
        console.log("Fizz");
        tally.fizz++;
      } else if (i % 5 === 0) {
        console.log("Buzz");
        tally.buzz++;
      } else {
        console.log(i);
      }
    }
  
    console.log("fizz:", tally.fizz);
    console.log("buzz:", tally.buzz);
    console.log("fizzbuzz:", tally.fizzbuzz);
  }
  
  fizzBuzzTally();
  