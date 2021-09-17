// Assignment Code
var generateBtn = document.querySelector("#generate");
// There may be an easier way to randomly generate a random letter or character, but I don't have to find it, frankly.
var letters = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specChar = ['~','!','@','#','$','%','&','*']
var myPassword = ''

// Write password to the #password input
function writePassword() {
    //Randomly add x characters from 4 random categories
    //This works, but it has a problem in that it doesn't:
        //Allow User Input
        //Include 1 character from each category
        //Check validity

    // for testing purposes only
    var x = 12;
    for (i = 0; i < x; i++) {
      var pwChar = (Math.floor(Math.random() *4)+ 1)
      if (pwChar == '1') { 2
          var myNumber = Math.floor(Math.random() * 10);
          myPassword = myPassword + '' + myNumber;
      } else if (pwChar == '2') {
          var charSelect = Math.floor(Math.random() * specChar.length);
          var myChar = specChar[charSelect];
          myPassword = myPassword + '' + myChar;
      } else if (pwChar == '3') {
          var letSelect = Math.floor(Math.random() * letters.length);
          var myLet = letters[letSelect];
          myPassword = myPassword + '' + myLet;
      } else if (pwChar == '4') {
          var ucLetSelect = Math.floor(Math.random() * letters.length);
          var myLet = letters[ucLetSelect].toUpperCase();
          myPassword = myPassword + '' + myLet;
      }
      console.log(myPassword);

  }

  myPassword = ''


//  var myPassword = generatePassword();
//  var passwordText = document.querySelector("#password");


}

// Add event listener to generate button
// I'll have to come back to this
generateBtn.addEventListener("click", writePassword);
