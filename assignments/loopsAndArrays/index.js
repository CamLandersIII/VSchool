var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var count = 0;
for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    count++;
  }
}

console.log("There are " + count + " computers.");

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  var person = peopleWhoWantToSeeMadMaxFuryRoad[i];
  var age = person.age;
  var gender = person.gender;
  
  if (age >= 18) {
    console.log(person.name + " is old enough.");
  } else {
    console.log(person.name + " is not old enough.");
  }
}
