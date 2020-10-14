//PASSWORD CHARACTER ARRAYS
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

  // 1) get the number from the prompt from the user ex: 10
  // 2) ask user what types of chars they want in their password(sym, upper, lower, number)
    // 2.5) use the .push() method to push each array (that the user wants) into an empty array
      // ex: var blankArray = []
  // 3) once all of the chars that the user wants in their password (being held in blankArray) THEN for loop over blank array
    // 3.5) inside the loop, run a math.random and get a random char from each loop


    var blankArray = []

    // prompt = do you want symbols? if === true then blankArray.push(symbols)

  for(var i = 0; i < numbers.length; i++) {
  
  console.log(numbers[i])
}



// take the number that the user gets from the promp and give that to the for loop to loop over that amount of times
// for loop {
  // math.random()
// }

//FUNCTIONS THAT RETURN RANDOM VALUES

function randomLower () {
  return lowerCaseLetters[Math.floor(Math.random () * lowerCaseLetters.length)];
}

function randomUpper () {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function randomNumber () {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSpecial () {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//FUNCTION COMBINING ALL RANDOM FUNCTIONS 

var allFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSpecial
};
// //FUNCTIONS THAT PROMPT USER IF THEY WANT CHARACTER, AND RETURN A CORRESPONDING VALUE

// function userWantsLow () {
//   lowLetter = confirm("Do you want to include Lower Case letters in your password?");
//   if (lowLetter) {
//     console.log(randomLower ());
//   } else {
//     console.log(lowLetter);
//   }
// }

// function userWantsUpper () {
//   upLetter = confirm("Do you want to include Upper Case letters in your password?");
//   if (upLetter) {
//     console.log(randomUpper()); 
//   } else {
//     console.log(upLetter);
//   }
// }

// function userWantsNumb () {
//   num = confirm("Do you want to include Numbers in your password?");
//   if (num) {
//     console.log(randomNumber());
//   } else {
//     console.log(num);
//   }
// }

// function userWantsSpec () {
//   spec = confirm("Do you want to include Special Characters in your password?");
//   if (spec) {
//     console.log(randomSpecial());
//   } else {
//     console.log(spec);
//   }
// }

//WHEN GENERATE BUTTON IS CLICKED, FUNCTION IS LAUNCHED

function passwordLength () {
  for(var i = 0; i < numbers.length; i++) {
  
  console.log(numbers[i])
}
  var userLength = prompt("How many characters do you want in your password? Enter a numeric value between 8 and 128."); 
  if (userLength > 128 || userLength < 8) {
    prompt ("Enter a numeric value between 8 and 128."); 
  } else if (userLength <= 128 || userLength >= 8) {
    console.log(userLength);
  //   return userLength;
  } else {
    return userLength;
  }

   var lowLetter = confirm("Do you want to include Lower Case letters in your password?");
   if (lowLetter) {
     // blankArray.push(lowLetter)
    console.log(randomLower ());
  } else {
    console.log(lowLetter);
  }

   var upLetter = confirm("Do you want to include Upper Case letters in your password?");
  if (upLetter) {
    console.log(randomUpper()); 
  } else {
    console.log(upLetter);
  }

  var num = confirm("Do you want to include Numbers in your password?");
  if (num) {
    console.log(randomNumber());
  } else {
    console.log(num);
  }

 var spec = confirm("Do you want to include Special Characters in your password?");
  if (spec) {
    console.log(randomSpecial());
  } else {
    console.log(spec);
  }};


  //  var types = lowLetter.value + upLetter.value + num.value + spec.value;
  // //  var passArray = [{lowletter}, {upLetter}, {num}, {spec}].filter (
  // //    item => Object.values(item)
  // //  );

  //  for (var i = 0; i < userLength; i += types) {
  //   // types.forEach(type => {
  //     var funcName = Object.keys(type)[0];
  //     console.log("funcName:", funcName);
  //     // += allFunc[funcName] (); 
  //   });
  

   


  



  // for (var i = 0; i < userLength.length; i+= ); {
  //   console.log((lowLetter.value + upLetter.value + num.value + spec.value) * userLength.length);
  

  // userWantsLow ();
  // userWantsUpper();
  // userWantsNumb();
  // userWantsSpec ();

  
  // for (var i = 0; i < userLength; i++); {
  //   console.log((userWantsLow() + userWantsUpper() + userWantsNumb () + userWantsSpec ()) * userLength);
  // }

 
// for (var i = 0; i < passwordLength.length; i++);

// function generatePassword () {
//   for (var i = 0; i < passwordLength.length; i++); {
//     outputPass = [Math.floor(Math.random () * passwordLength())];
//   }

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add  listener to generate button
// generateBtn.addEventListener("click", writePassword)
