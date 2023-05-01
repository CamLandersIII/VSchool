

function forception(people, alphabet) {
    let result = [];
    for (let i = 0; i < people.length; i++) {
      result.push(people[i] + ":");
      for (let j = 0; j < alphabet.length; j++) {
        result.push(alphabet[j]);
      }
    }
    return result;
  }
  
  // Example usage:
  let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  console.log(forception(people, alphabet));
  