// When document ready using vanilla JS, add class "header-main-menu" to #header
document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('header').classList.add('header-main-menu');
  document.getElementById('header').classList.add('header-ingame');
});

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
    "description": "You find yourself in the Green Grotto, a lush and verdant cavern. The air is thick with the scent of moss and damp earth. The sound of water dripping echoes through the chamber."
  },
  {
    "type": "gameplay",
    "name": "Down the Hole",
    "description": "It is darker in here. It is hard to see. You wish you had a torch or some night vision goggles."
  },
  {
    "type": "gameplay",
    "name": "Twinkling Calcite",
    "description": "The walls are lined with calcite crystals that twinkle in the dim light. You feel a sense of wonder and awe."
  },
  {
    "type": "gameplay",
    "name": "Crystal Caverns",
    "description": "The cavern opens up into a vast chamber. The walls are lined with crystals that sparkle like diamonds."
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
    "description": "It is dark in here. It is hard to see. You wish you had a torch or some night vision goggles."
  }
];