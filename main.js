// When document ready using vanilla JS, add class "header-main-menu" to #header
document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('header').classList.add('header-main-menu');
  document.getElementById('header').classList.add('header-ingame');
});

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
    "type": "gameplay",
    "name": "Green Grotto",
    "description": "You find yourself in the Green Grotto, a lush and verdant cavern. The air is thick with the scent of moss and damp earth. The sound of water dripping echoes through the chamber.",
    "image": "assets/green-grotto.jpg",
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
    "items": [ items.flashlight ]
  },
  {
    "type": "gameplay",
    "name": "Catacombs",
    "description": "It is dark in here. It is hard to see. You wish you had a torch or some night vision goggles.",
    "difficulty": 0.4
  }
];