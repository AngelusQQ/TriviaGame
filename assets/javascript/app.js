var emptyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var anArray = [0, 1, 2, 3];
var tempTimer;

var triviaSet = {
  category: "None",
  Animals: {
    questions: [
      "What is the only mammal that can truly fly?",
      "What is the largest rodent found in North America?",
      "What is the only bird known to fly backwards?",
      "What chemical element gives the blood of a lobster a bluish tint?",
      "What snake, who's untreated bite is almost 100% fatal, is the world's fastest snake on land?",
      "What is the name for a male bee that comes from an unfertilized egg?",
      "Which of the traditional five senses are dolphins believed not to possess?",
      "What is a group of Whales called?",
      "What is the national animal of Scotland?",
      "How many hearts does an octopus have?"
    ],
    realAnswers: [
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
    answers: [
      ["Bats", "Flying Squirrels", "Ostrich", "Ferrets"],
      ["Beavers", "Guinea Pig", "Groundhog", "NYC Subway Rat"],
      ["Hummingbirds", "Eagles", "Penguins", "Doves"],
      ["Copper", "Zinc", "Lead", "Oxygen"],
      ["Black Mamba", "Anaconda", "Cobra", "Rattlesnake"],
      ["Drone", "Worker", "Queen", "King"],
      ["Smell", "Sight", "Hearing", "Taste"],
      ["Pod", "Group", "Herd", "Pride"],
      ["Unicorn", "Bear", "Eagle", "Lion"],
      ["Three", "One", "Two", "Eight"]
    ]
  },
  Food: {
    questions: [
      "In which country did chedder cheese originate?",
      "What is the main ingredient in thousand island dressing?",
      "What ingredient is added to white sugar to make brown sugar?",
      "To be legally sold as bourbon, a whiskey's mash must contain at least 51% of what grain?",
      "The first McDonald's restaurant opened in which U.S. state?",
      "What fast food franchise has the most worldwide locations?",
      "Dijon mustard originated in the city of Dijon located in what Country?",
      "What popular soda beverage was originally developed as a mixer for Whiskey?",
      "What is the name of the scale used to measure the spicy heat of pepppers?",
      "A teetotaler is a person that never drinks what?"
    ],
    realAnswers: [
      "England",
      "Mayonnaise",
      "Molasses",
      "Corn",
      "California",
      "Subway",
      "France",
      "Mountain Dew",
      "Scoville Scale",
      "Alcohol"
    ],
    answers: [
      ["England", "Scotland", "India", "Netherlands"],
      ["Vinegar", "Mayonnaise", "Mustard", "Ketchup"],
      ["Molasses", "Water", "Sucrose", "Maple Syrup"],
      ["Corn", "Rice", "Wheat", "Barley"],
      ["California", "New York", "Texas", "Washington"],
      ["Subway", "McDonalds", "Starbucks", "KFC"],
      ["France", "England", "United States", "None of the Above"],
      ["Mountain Dew", "Coca-Cola", "Sprite", "Fanta"],
      ["Scoville Scale", "Piquant Scale", "Richter Scale", "Pepper Scale"],
      ["Alcohol", "Water", "Juice", "Soda/Pop"]
    ]
  },
  Politics: {
    questions: [
      "Who was the oldest person to be elected to the office of President of the United States?",
      "The oldest parliament in the world belongs to what country?",
      'Which U.S. President was known as "The Great Communicator"',
      "Which political party promotes individual liberty, free markets, non-interventionism and limited government?",
      "What animal is the symbol of the United States democratic party?",
      "In the United States, Who is next in line to succeed the President, after the Vice President?",
      "Who was the first president of the United States to live in the White House?",
      "Which country became the first to give women the right to vote?",
      "How old must a person be to run for President in the United States?",
      "Abraham Lincoln belonged to which Political Party?"
    ],
    realAnswers: [
      "Donald Trump",
      "Iceland",
      "Ronald Reagan",
      "Libertarian",
      "Donkey",
      "Speaker of the House",
      "John Adams",
      "New Zealand",
      "35",
      "Republican"
    ],
    answers: [
      ["Donald Trump", "Ronald Reagan", "Abraham Lincolin", "George Bush (Senior)"],
      ["Iceland", "England", "Ireland", "Scotland"],
      ["Ronald Reagan", "Donald Trump", "Abraham Lincolin", "George Bush (Senior)"],
      ["Libertarian", "Democratic", "Republican", "Green"],
      ["Donkey", "Bald Eagle", "Elephant", "Horse"],
      ["Speaker of the House", "Vice President", "Senate President", "Secretary of Defense"],
      ["John Adams", "George Washington", "Andrew Jackson", "Donald Trump"],
      ["New Zealand", "China", "United States", "England"],
      ["35", "21", "25", "There is no age restriction"],
      ["Republican", "Democratic", "Libertarian", "None of the Above"]
    ]
  },
  USA : {
    questions: [
      "In What state was President Barack Obama born?",
      "How many states are needed to ratify an amendment for it to become part of the constitution?",
      "Which U.S. state has the highest number of colleges and universities?",
      "Which is the only U.S. state without a rectangular flag?",
      "American mobster Al Capone was sentenced to 11 years in federal prison for what crime?",
      "Atlantic City is a popular entertainment destination located in what U.S. state?",
      "Who was the first U.S. President born in a hospital?",
      "Alaska was purchased by the United States from what country?",
      "What do the letters ZIP stand for in the United States Postal Code?",
      "The Grand Canyon is located in which U.S. State?"
    ],
    realAnswers: [
      "Hawaii",
      "38",
      "California",
      "Ohio",
      "Tax Evasion",
      "New Jersey",
      "Jimmy Carter",
      "Russia",
      "Zone Improvement Plan",
      "Arizona"
    ],
    answers: [
      ["Hawaii", "New York", "Florida", "California"],
      ["25", "50", "38", "It's up to the President"],
      ["California", "New York", "Texas", "Massachusetts"],
      ["Ohio", "Oregon", "Oklahoma", "Utah"],
      ["Tax Evasion", "Murder", "Speeding", "Drugs"],
      ["New Jersey", "New York", "Nevada", "Massachusetts"],
      ["Jimmy Carter", "George Washington", "Richard Nixon", "John F. Kennedy"],
      ["Russia", "China", "Japan", "Alaska"],
      ["Zone Improvement Plan", "Zone In Progress", "Zoo in Parachute", "Zoo internal post"],
      ["Arizona", "New Mexico", "Colorado", "Nevada"]
    ]
  },
  counter: 0,
  score: 0,
  currentAnswer: null,
  correct: null,
  time: 30,

  startGame: function() {
    $('#categorySound')[0].play();
    $('.category').css("display", "none");
    $('#question, .answer, #timer').css("display", "block");
    this.nextQuestion();
  },

  restartGame: function() {
    $('.category').css("display", "block");
    $('#score, #button').css("display", "none");
    this.counter = 0;
  },

  scoreScreen: function() {
    $('#question, .answer', '#timer', '#gif').css("display", "none");
    $('.category').css("display", "none");
    $('#score, #button').css("display", "block");
    $('#score').text("Score: " + this.score);
  },

  answerScreen: function () {
    $('.answer').css("display", "none");
    if(triviaSet.correct === true) {
      $('#question').text("CORRECT!");
      $('#gif').attr("src", "assets/images/right.gif");
    } else {
      $('#question').text("WRONG!");
      $('#gif').attr("src", "assets/images/wrong.gif");
    }
    triviaSet.correct = false;
    $('#gif').css("display", "block");
    setTimeout(triviaSet.nextQuestion, 3000);
  },

  randomizer: function (theArray) {
    for(var i = 0; i < theArray.length; i++) {
      var temp = theArray[i];
      var randomNumber = Math.floor(Math.random() * theArray.length);
      theArray[i] = theArray[randomNumber];
      theArray[randomNumber] = temp;
    }
  },

  checkAnswer: function (answer) {
    var temp = this.category;
    if (this[temp].realAnswers.includes(answer) === true) {
      this.score += 1;
      this.correct = true;
    }
    this.counter += 1;
    this.randomizer(anArray);
    this.answerScreen();
    clearTimeout(tempTimer);
    triviaSet.time = 30;
  },

  nextQuestion: function () {
    triviaSet.time = 30;
    $('#timer').text("Timer: " + triviaSet.time);
    if(triviaSet.counter === 10) {
      triviaSet.scoreScreen();
      throw "I don't know how to stop and im afraid to use break;";
    }
    var temp = triviaSet.category;
    $('#question').text(triviaSet[temp].questions[emptyArray[triviaSet.counter]]);
    for(var i = 1; i < 5; i++) {
      $('div[data="' + i + '"]').text(triviaSet[temp].answers[emptyArray[triviaSet.counter]][anArray[i-1]]);
    }
    $('#gif').css("display", "none");
    $('.answer').css("display", "block");
    tempTimer = setInterval(triviaSet.timer, 1000);
  },

  timer: function() {
    triviaSet.time -= 1;
    $('#timer').text("Timer: " + triviaSet.time);
    if(triviaSet.time === 0) {
      clearTimeout(tempTimer);
      triviaSet.answerScreen();
    }
  }
};

$(document).ready(function () {
  triviaSet.randomizer(emptyArray);
  triviaSet.randomizer(anArray);

  //mousedown when selecting a category/topic
  $('.category, .answer').mousedown(function () {
    $(this).css("opacity", 0.5);
  });

  $('#button').mousedown(function () {
    $(this).css("font-size", "4vh");
    $(this).css("margin", "0vh 21vw");
    $(this).css("margin-top", "20vh");
  });

  $('#button').mouseup(function () {
    $(this).css("font-size", "5vh");
    $(this).css("margin", "0vh 20vw");
    $(this).css("margin-top", "20vh");
    triviaSet.restartGame();
  });

  //mouseUp when concluding the category chosen and starting the game
  $('.category').mouseup(function () {
    $(this).css("opacity", 1.0);
    triviaSet.category = $(this).text();
    triviaSet.startGame();
  });

  $('.answer').mouseup(function () {
    $(this).css("opacity", 1.0);
    triviaSet.checkAnswer($(this).text());
  });
});

/* It doesn't work with $("#myAudioElement").play() like you would expect.
The official reason is that incorporating it into jQuery would add a play() method to every single element,
which would cause unnecessary overhead. */
