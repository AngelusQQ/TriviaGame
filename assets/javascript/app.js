var triviaSet = {
  category: "None",
  Animal: {
    questions: [
      "What is the only mammal that can truly fly?",
      "What is the largest rodent found in North America?",
      "What is the only bird known to fly backwards",
      "What chemical element gives the blood of a lobster a bluish tint?",
      "What snake, who's untreated bite is almost 100% fatal, is the world's fastest snake on land?",
      "What is the name for a male bee that comes from an unfertilized egg?",
      "Which of the traditional five senses are dolphins believed not to possess?",
      "What is a group of Whales called?",
      "What is the national animal of Scotland?",
      "How many hearts does an octopus have?"
    ],
    answers: [
      "Bats",
      "Beavers",
      "Hummingbirds",
      "Copper",
      "Black Mamba",
      "Drone",
      "Smell",
      "Pod",
      "Unicorn",
      "Three"
    ],
    wrongAnswers: [
      ["Flying Squirrels", "Ostrich", "Ferrets"],
      ["Guinea Pig", "Groundhog", "NYC Subway Rat"],
      ["Eagles", "Penguins", "Doves"],
      ["Zinc", "Lead", "Oxygen"],
      ["Anaconda", "Cobra", "Rattlesnake"],
      ["Worker", "Queen", "King"],
      ["Sight", "Hearing", "Taste"],
      ["Group", "Herd", "Pride"],
      ["Bear", "Eagle", "Lion"],
      ["One", "Two", "Eight"]
    ]
  },
  Food: {
    questions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    answers: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    wrongAnswers: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  },
  Politics: {
    questions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    answers: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    wrongAnswers: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  },
  USA : {
    questions: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    answers: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    wrongAnswers: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  },
  score: 0,
  hints: 3,

  startGame: function() {
    this.score = 0;
    this.hints = 3;
    $('.category').css("display", "none");
    $('#categorySound')[0].play();
    var temp = this.category;
    $('#question').text(this.temp.questions[0]);
    $('#question').css("display", "inline");
  },

  restartGame: function() {
    $('.category').css("display", "none");
  }
};

$(document).ready(function () {
  //mousedown when selecting a category/topic
  $('.category').mousedown(function () {
    $(this).css("opacity", 0.5);
  });

  //mouseUp when concluding the category chosen and starting the game
  $('.category').mouseup(function () {
    $(this).css("opacity", 1.0);
    triviaSet.category = $(this).text();
    triviaSet.startGame();
  });
});

/* It doesn't work with $("#myAudioElement").play() like you would expect.
The official reason is that incorporating it into jQuery would add a play() method to every single element,
which would cause unnecessary overhead. */
