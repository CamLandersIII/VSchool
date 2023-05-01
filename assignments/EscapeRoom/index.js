const readlineSync = require('readline-sync');

// Set up the initial game state
let hasKey = false;
let isGameOver = false;

// Loop until the game is over
while (!isGameOver) {
  // Print out the current options for the user
  console.log('You are in a locked room. What would you like to do?');
  if (!hasKey) {
    console.log('1. Find the key');
  } else {
    console.log('1. You have the key');
  }
  if (hasKey) {
    console.log('2. Open the door');
  } else {
    console.log('2. Door is locked');
  }
  console.log('3. Put hand in hole');

  // Get the user's input
  const choice = readlineSync.question('Enter your choice: ');

  // Process the user's input
  switch (choice) {
    case '1':
      if (!hasKey) {
        console.log('You found the key!');
        hasKey = true;
      } else {
        console.log('You already have the key!');
      }
      break;
    case '2':
      if (hasKey) {
        console.log('You escaped the room!');
        isGameOver = true;
      } else {
        console.log('The door is locked. You need to find the key first!');
      }
      break;
    case '3':
      console.log('You put your hand in the hole and died!');
      isGameOver = true;
      break;
    default:
      console.log('Invalid choice. Please enter 1, 2, or 3.');
  }
}
