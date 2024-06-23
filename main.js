// When document ready using vanilla JS, add class "header-main-menu" to #header
document.addEventListener('DOMContentLoaded', function () {
  // document.getElementById('header').classList.add('header-main-menu');
  // document.getElementById('header').classList.add('header-ingame');

  showMenu();

  let gameState = {
    "level": 0,
    "inventory": [],
    "money": 0
  };

  // showLevel(gameState.level);
});

// Show the menu!
// Change the header, show a random subtitle message, and equip the PLAY button.
function showMenu() {
  // Change header

  document.getElementById('header').classList.add('header-main-menu');
  const messages = [
    "ENTER the DEPTHS...",
    "TRY to get OUT!",
    "COLLECT them ALL!"
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('header-wrapper').innerHTML = `<div class="title">Crystal Collector 3</div><div class="subtitle">${message}</div>`;
  document.documentElement.style.setProperty('--top-background', `url(assets/cave.jpg)`);

  // Change content
  const content = document.getElementById('content');
  content.innerHTML = '<div id="button-wrapper"><button id="play">PLAY</button></div>';

  document.getElementById('play').addEventListener('click', startGame);
}

// Show the level with the given ID!
// Validate the ID, change the header, and delegate to showing cutscene, gameplay, or merchant.
function showLevel(id) {
  // ID needs to be a number in the range of the progression array
  if (id < 0 || id >= progression.length) {
    console.error("Invalid level ID.");
    return;
  }

  // Get the level object
  const level = progression[id];

  // Change header
  document.getElementById('header').classList.add('header-ingame');
  document.getElementById('header-wrapper').innerHTML = `<div class="title">Crystal Collector 3</div><div class="subtitle">${level.name}</div>`;
  document.documentElement.style.setProperty('--top-background', `url(${level.image})`);

  // Check the type of level
  if (level.type === "cutscene") {
    showCutscene(id);
  } else if (level.type === "gameplay") {
    showGameplay(id);
  } else if (level.type === "merchant") {
    showMerchant(id);
  }
}

// Load the gameplay screen for the given ID.
function showGameplay(id) {
  // ID needs to be a number in the range of the progression array
  if (id < 0 || id >= progression.length) {
    console.error("Invalid level ID.");
    return;
  }

  // Get the level object
  const level = progression[id];

  // Change content
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Add any textbox
  content.innerHTML += `<div class="textbox">You may take exactly <span id="crystal-count-game">67</span> crystals.<br>Your crystals: <span id="crystal-count-player">0</span></div>`;

  // Add crystals
  content.innerHTML += `<div class="crystals"><img class="crystal" src="assets/crystal-blue.png" data-color="blue"><img class="crystal" src="assets/crystal-white.png" data-color="white"><img class="crystal" src="assets/crystal-red.png" data-color="red"><img class="crystal" src="assets/crystal-green.png" data-color="green"></div>`;
}

// Load the cutscene screen for the given ID.
function showCutscene(id) {
  // ID needs to be a number in the range of the progression array
  if (id < 0 || id >= progression.length) {
    console.error("Invalid level ID.");
    return;
  }

  // Get the level object
  const level = progression[id];

  // Change content
  const content = document.getElementById('content');
  content.innerHTML = `<div class="textbox">${level.description}</div>`;
  content.innerHTML += `<button id="continue">CONTINUE</button>`;
}

// Load the merchant screen for the given ID.
function showMerchant(id) {

}

// Start the game at level 0.
function startGame() {
  showLevel(0);
}

// GAME STATE consists of an INDEX of the progression array, an INVENTORY of items, and an amount of MONEY.

// Items that can be sold in game:
const items = {
  "flashlight": {
    "name": "Flashlight"
  }
};

// Array of progression in game;
const progression = [
  {
    "type": "cutscene",
    "name": "Welcome!",
    "description": "You are a Crystal Collector. You have been hired to explore the depths of the caverns and collect as many crystals as you can. Good luck!",
    "image": "assets/cave.jpg"
  },
  {
    "type": "gameplay",
    "name": "Green Grotto",
    "description": "You find yourself in the Green Grotto, a lush and verdant cavern. The air is thick with the scent of moss and damp earth. The sound of water dripping echoes through the chamber.",
    "image": "assets/cave.jpg",
    "difficulty": 0
  },
  {
    "type": "gameplay",
    "name": "Down the Hole",
    "description": "It is darker in here. It is hard to see. You wish you had a torch or some night vision goggles.",
    "difficulty": 0.1
  },
  {
    "type": "gameplay",
    "name": "Twinkling Calcite",
    "description": "The walls are lined with calcite crystals that twinkle in the dim light. You feel a sense of wonder and awe.",
    "difficulty": 0.1
  },
  {
    "type": "gameplay",
    "name": "Crystal Caverns",
    "description": "The cavern opens up into a vast chamber. The walls are lined with crystals that sparkle like diamonds.",
    "difficulty": 0.2
  },
  {
    "type": "merchant",
    "name": "Ratfolk Merchant",
    "description": "Hello, young collector! I am the Ratfolk Merchant. Surely you are interested in my wares?",
    "items": [items.flashlight]
  },
  {
    "type": "gameplay",
    "name": "Catacombs",
    "description": "It is dark in here. It is hard to see. You wish you had a torch or some night vision goggles.",
    "difficulty": 0.4
  }
];