
  alert("Welcome to my guessing game!\n I'm going to ask three questions to see how well you know me!");
  var middleName = prompt("First question: What is my middle name?").toLowerCase();
  if (middleName === "elizabeth") {
    alert("Good Job, my middle name is " + middleName + "!");
  } else {
    alert("My middle name is not "+ middleName);
  }

  var catsOrDogs = prompt("Second question: Do I prefer cats or dogs?").toLowerCase();
  if (catsOrDogs === "dogs") {
    alert("Yes, I love " + catsOrDogs + "!");
  } else if (catsOrDogs === "cats"){
    alert("Wrong, I respect "+ catsOrDogs + ", but dogs are the best!");
  } else {
    alert("I'm sure "+ catsOrDogs +" is cool, but it wasn't an option in the question.\n So you are wrong.");
  }

  var nflTeam = prompt("Third question: My favorite NFL team is the ...").toUpperCase();
  if (nflTeam === "SEAHAWKS") {
    alert("Duh! The SEATTLE " + nflTeam + " are the greatest!\n That question was too easy!");
  } else if (nflTeam === "SEATTLE SEAHAWKS"){
    alert("Yes! the "+nflTeam);
  } else {
    alert("No way, "+ nflTeam +" is okay, but not as cool as the Seahawks!\n You are mistaken.");
  }

  var myAge = parseInt(prompt("What's my age again?"));
  if (myAge === 25) {
    alert("You are correct! I am "+ myAge + "!");
  } else if (myAge > 25) {
    alert("You guessed too high, I'm not that old yet");
  } else {
    alert(myAge+" is too low!");
  }
