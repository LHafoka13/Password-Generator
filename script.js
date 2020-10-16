//PASSWORD CHARACTER ARRAYS
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var usersChoice = [];

//FUNCTION TO GENERATE THE PASSWORD
function passwordLength () {
//EMPTIES USERPASS SO THAT IT DOESN'T BUILD UPON ITSELF EVERYTIME YOU PRESS GENERATE
  var userPass = [];
//PROMPTS USER TO ENTER A NUMERIC VALUE BETWEEN 8 AND 128, IF THEY DON'T ENTER THE APPROPRIATE VALUE, IT PROMPTS THEM TO TRY AGAIN
  var userLength = prompt("How many characters do you want in your password? Enter a numeric value between 8 and 128."); 
  if (userLength > 128 || userLength < 8) {
    prompt ("Enter a numeric value between 8 and 128."); 
  } else if (userLength <= 128 || userLength >= 8) {
    userLength;
  //   return userLength;
  } else {
    return userLength;
  }

    //USER MUST CONFIRM IF THEY WANT LOWER CASE LETTERS IN THEIR PASSWORD AND IF SO, IT CONCATS THE ARRAY OF LOWERCASELETTER INTO THE BLANK ARRAY OF USERSCHOICE

   var lowLetter = confirm("Do you want to include Lower Case letters in your password?");
   if (lowLetter) {
     // blankArray.push(lowLetter)
    // usersChoice.push(lowerCaseLetters);
   usersChoice = usersChoice.concat(lowerCaseLetters);
  } else {
    console.log(lowLetter);
  }

  //USER MUST CONFIRM IF THEY WANT UPPER CASE LETTER IN THEIR PASSWORD AND IF SO, IT CONCATS THE ARRAY OF UPPERCASELETTER INTO THE BLANK ARRAY OF USERSCHOICE

   var upLetter = confirm("Do you want to include Upper Case letters in your password?");
  if (upLetter) {
    usersChoice = usersChoice.concat(upperCaseLetters); 
  } else {
    console.log(upLetter);
  }
  
  //USER MUST CONFIRM IF THEY WANT NUMBERS IN THEIR PASSWORD AND IF SO, AND CONCATS THE ARRAY OF NUMBERS INTO THE BLANK ARRAY OF USERSCHOICE

  var num = confirm("Do you want to include Numbers in your password?");
  if (num) {
   usersChoice = usersChoice.concat(numbers);
  } else {
    console.log(num);
  }

    //USER MUST CONFIRM IF THEY WANT SPECIAL CHARACTERS IN THEIR PASSWORD AND IF SO, AND CONCATS THE ARRAY OF SYMBOLS INTO THE BLANK ARRAY OF USERSCHOICE

 var spec = confirm("Do you want to include Special Characters in your password?");
  if (spec) {
    usersChoice = usersChoice.concat(symbols);
  } else {
    console.log(spec);}

   


    console.log('userChoice',usersChoice);
    console.log('userLength', userLength);

    

    for (var i = 0; i < userLength; i++) {
      //LOOPS AND RETURNS VALUES UNTIL IT REACHES THE VALUE OF USERLENGTH
      console.log(i) 
      //RETURNS A RANDOM NUMERIC VALUE
      var randomChar = Math.floor(Math.random() * usersChoice.length);
      //RETURNS THE INDEX VALUES OF USERS CHOICE AND PUSHES IT INTO A SINGLE ARRAY CALLED USERASS
      userPass.push((usersChoice[randomChar]));


    }
      
   //SETS THE VARIABLE PASSWORDTEXT TO THE ID OF #PASSWORD

    var passwordText = document.querySelector("#password");

    //THE VALUE OF PASSWORD TEXT IS EQUAL TO THE JOINED VALUES FROM USER PASS
    passwordText.value = userPass.join("");
  }
