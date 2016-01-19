var counter = 0;
var questions = ['First question: What is my middle name?', 'Second question: Do I prefer cats or dogs?', 'Third question: My favorite NFL team is the ...', "What's my age again?"];
var answers = ['elizabeth', 'dogs', 'seahawks', 25];
var correctAns = document.getElementById('answer');

function answerPic(imgId, picSource) {
  document.getElementById(imgId).innerHTML = picSource;
}

function updatePage(elId, text) {
  document.getElementById(elId).textContent = text;
}

function userScore() {
  updatePage('userScore', 'You got ' + counter + ' out of ' + questions.length + ' correct!');
}

function game(question, answer) {
    var ques = prompt(question).toLowerCase();

    updatePage('question', question);
    updatePage('answer', 'You entered: ' + ques);

    if (answer === ques || answer === parseInt(ques)) {
      counter++;
      answerPic('image', '<p><img src="images/right.png"/></p>');
      updatePage('isCorrect', 'Yay! You guessed correctly!');
      correctAns.className= 'correct';
    } else {
      answerPic('image', '<p><img src="images/right.png"/></p>');
      updatePage('isCorrect', 'Awwww.... It\'s like you don\'t know me at all');
      correctAns.className= 'incorrect';
    }
  }

function gameStart() {

  document.getElementById('submitButton').style.display='none';
  document.getElementById('megan').style.display='none';
  document.getElementById('welcome').style.display='none';


  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers[i]);
  }

  userScore();

  updatePage('question', "Now let's see if you can read my mind...");
  updatePage('answer', '');
  updatePage('isCorrect', '');
  updatePage('userScore', '');

  var guessedRight = false;
  while (!guessedRight) {

    var userNum = parseInt(prompt('What number am I thinking of between 1-10?'));
    updatePage('answer', 'You guessed: ' + userNum);

    var myNum = 5;
    if (userNum === myNum) {
      updatePage('isCorrect', "You're a mind reader!");
      guessedRight = true;
    } else if (userNum > myNum) {
      updatePage('isCorrect', "You're too high, guess again!");
    } else {
      updatePage('isCorrect', "You're too low, guess again!");
    }
  }

  document.getElementById('contributors').innerHTML = '<p> Thanks <a href="https://www.github.com/tlwirtz">Taylor</a> and <a href="https://www.github.com/danielxli">Daniel</a> for contributing.</p>';


}
