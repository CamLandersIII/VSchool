

const readlineSync = require('readline-sync');

// Greeting message
console.log("Welcome Ashen one!");

// Ask for the player's name
const userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + ', my name is Mash and I am your guide.');

// Ask if the player needs help and provide response
if (readlineSync.keyInYN('Do you need help?')) {
  console.log('Keep your sword close, night is encroaching');
} else {
  console.log('Keep your sword close, night is encroaching');
}

// Main character object
function MainCharacter(player, hp) {
  this.player = player;
  this.hp = hp;
  this.inventory = [];
}

let isAlive = true;

// Enemy object
function Enemy(enemyName, hp, attackName, deathMessage) {
  this.enemyName = enemyName;
  this.hp = hp;
  this.attackName = attackName;
  this.deathMessage = deathMessage;
}

// Array of enemies
const enemies = [
  new Enemy("Hollow", 5, "wields a broken straight sword", "howls into the sky"),
  new Enemy("Basilisk", 2, "bites", "that's it no more"),
  new Enemy("Slime", 3, "tackles", "finally set free")
];

// Function to print player stats and inventory
function printInventory(player) {
  console.log("Name: " + player.player);
  console.log("HP: " + player.hp);
  console.log("Inventory: " + player.inventory.join(", "));
}

// Function to handle walking
function walk(player) {
  while (isAlive) {
    const choice1 = readlineSync.question("Hello " + player.player + ", press (w) to walk or (q) to quit, or (p) to print inventory. ");
    if (choice1 === "w") {
      // Random chance of encountering an enemy
      const encounterChance = Math.random();
      if (encounterChance <= 0.25) {
        // Enemy appears
        const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log("The enemy, " + randomEnemy.enemyName + ", has appeared.");
        while (randomEnemy.hp > 0 && player.hp > 0) {
          const choice2 = readlineSync.question("Do you want to attack[a] or run[r]? ");
          if (choice2 === 'a') {
            // Player chooses to attack
            const damageDealt = Math.floor(Math.random() * (5 - 1 + 1)) + 1; // Random damage between 1 and 5
            console.log("You deal " + damageDealt + " damage to the " + randomEnemy.enemyName + ".");
            randomEnemy.hp -= damageDealt;
            if (randomEnemy.hp <= 0) {
              // Enemy is defeated
              console.log("You have defeated the " + randomEnemy.enemyName + ".");
              player.hp += 2;
              player.inventory.push("Special Item");
              console.log("You have gained 2 HP and a Special Item.");
              break;
            }
            // Enemy attacks back
            const enemyDamageDealt = Math.floor(Math.random() * (4 - 1 + 1)) + 1; // Random damage between 1 and 4
            console.log("The " + randomEnemy.enemyName + " attacks back and deals " + enemyDamageDealt + " damage.");
            player.hp -= enemyDamageDealt;
          } else if (choice2 === 'r') {
            break;
          }
        }
      }
    } else if (choice1 === "p") {
      printInventory(player);
    } else
    if (choice1 === "q") {
      console.log("Thanks for playing!");
      isAlive = false;
    }
  }
}

// Create a new MainCharacter
const player = new MainCharacter(userName, 3);

// Start the game
walk(player);
