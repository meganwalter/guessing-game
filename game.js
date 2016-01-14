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

//update the score

//   var middleName = prompt("First question: What is my middle name?").toLowerCase();
//   if (middleName === "elizabeth") {
//     alert("Good Job, my middle name is " + middleName + "!");
//     counter ++; //adding points to the user score
//   } else {
//     alert("My middle name is not "+ middleName);
//   }
//
//   var catsOrDogs = prompt("Second question: Do I prefer cats or dogs?").toLowerCase();
//   if (catsOrDogs === "dogs") {
//     alert("Yes, I love " + catsOrDogs + "!");
//     counter ++; //adding points to the user score
//   } else if (catsOrDogs === "cats"){
//     alert("Wrong, I respect "+ catsOrDogs + ", but dogs are the best!");
//   } else {
//     alert("I'm sure "+ catsOrDogs +" is cool, but it wasn't an option in the question.\n So you are wrong.");
//   }
//
//   var nflTeam = prompt("Third question: My favorite NFL team is the ...").toUpperCase();
//   if (nflTeam === "SEAHAWKS" || nflTeam === "HAWKS" || nflTeam === "SEATTLE SEAHAWKS") {
//     alert("Duh! The " + nflTeam + " are the greatest!\n That question was too easy!");
//     counter ++; //adding points to user score
//   } else {
//     alert("No way, "+ nflTeam +" is okay, but not as cool as the Seahawks!\n You are mistaken.");
//   }
//
//   var myAge = parseInt(prompt("What's my age again?"));//convert string into number to evaluate comparisons (>, <, ===)
//   if (myAge === 25) {
//     alert("You are correct! I am "+ myAge + "!");
//     counter ++;
//   } else if (myAge > 25) {
//     alert("You guessed too high, I'm not that old yet");
//   } else {
//     alert(myAge+" is too low!");
//   }
//
//   if (counter>=3){
//     alert("Congrats, you got " + counter + " out of 4 correct!"); //I want to tell the user Congrats if their score is higher than 3/4
//   } else{
//     alert("Aw, you only got " + counter + " out of 4 correct!") //I want the user to feel guilty for getting < 3/4
//   }
//
