//declaring a varialbe to keep score of user answers
var counter = 0;
var questions = ['First question: What is my middle name?', 'Second question: Do I prefer cats or dogs?', 'Third question: My favorite NFL team is the ...', "What's my age again?"];
var answers = ['elizabeth', 'dogs', 'seahawks', 25];

alert("Welcome to my guessing game!\n I'm going to ask three questions to see how well you know me!");

function updatePage(elId, text) {
  document.getElementById(elId).textContent = text;
}

function userScore() {
  updatePage('userScore', 'You got ' + counter + ' out of ' + questions.length + ' correct!');
}

function game(question, answer) {
    var ques = prompt(question).toLowerCase();

    updatePage('question', question);
    updatePage('answer', answer);

    if (answer === ques || answer === parseInt(ques)) {
      counter++;
      updatePage('isCorrect', 'Yay! You guessed correctly!');
    } else {
      updatePage('isCorrect', 'Awwww.... It\'s like you don\'t know me at all');
    }
  }

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i]);
}

userScore();

updatePage('question', "Now let's see if you can read my mind...");
updatePage('answer', '');
updatePage('isCorrect', '');
updatePage('userScore', '');

var guessedRight = false; //declaring a variable to start the while loop
while (!guessedRight) { //while the user has guessed wrong, the game will continue to prompt them

  var userNum = parseInt(prompt('What number am I thinking of between 1-10?'));
  updatePage('answer', 'You guessed: ' + userNum);

  var myNum = 5;
  if (userNum === myNum) {
    updatePage('isCorrect', "You're a mind reader!");
    guessedRight = true; //when the user guesses correctly, the variable returns true and the while loop stops
  } else if (userNum > myNum) {
    updatePage('isCorrect', "You're too high, guess again!");
  } else {
    updatePage('isCorrect', "You're too low, guess again!");
  }
}

document.write('<p class="contributor"> Thanks <a href="https://www.github.com/tlwirtz">Taylor</a> for contributing.</p>');
