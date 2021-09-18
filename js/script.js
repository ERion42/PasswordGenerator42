// Assignment Code
var generateBtn = document.querySelector("#generate");
// There may be an easier way to randomly generate a random letter or character, but I don't have to find it, frankly.
var letters = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specChar = ['~','!','@','#','$','%','&','*']
var myPassword = ''

// Write password to the #password input
function writePassword() {
    //  Currently this just allows the user to select the total number of characters
    //  and the types of characters (user must select two or more)
    //  It builds a 
    //  It does not:
        //Output the password to the secure password window

    var charTotal = prompt("How many characters would you like to use for your password?");
    if (charTotal === null) {
        return; //break out of the function early
    }   else if (charTotal <= 7) {
        alert("That number is too low to be secure. Choose a larger one.");
        return;
    } else if (charTotal >= 129) {
        alert("That number is too high. Choose a lower one.");
        return;
    } else if (isNaN(charTotal)) {
        alert("That is not a number. Choose a number between 8 and 128.");
        return;
    } else if (charTotal >= 8){
        alert("That an acceptable length!")
    }

    if ((r1 + r2 + r3 + r4) < 2) {
        // only one type of character ain't good enough
        alert("That will be a terrible password. You need more than one category.");
        return;
    }
    else {
            // Here's where we build the password

            //Step through the process adding one character per selected character class then starting over and repeating until all characters have been chosen
            for (i = 0; i < charTotal; i++) {
                if (useNum = true) {
                    myNumber = Math.floor(Math.random() * 10);
                    myChar = myNumber;
                    myPassword = myPassword + '' + myChar;
                    console.log(myPassword);
                }
                if (useSChar = true) {
                    mySChar = Math.floor(Math.random() * specChar.length);
                    myChar = specChar[mySChar];
                    myPassword = myPassword + '' + myChar;
                    console.log(myPassword);
                }
                if (useUCase = true) {
                    myUcase = Math.floor(Math.random() * letters.length);
                    myChar = letters[myUcase];
                    myPassword = myPassword + '' + myChar.toUpperCase();
                    console.log(myPassword);
                }
                if (useLCase = true) {
                    myLCase = Math.floor(Math.random() * letters.length);
                    myChar = letters[myLCase];
                    myPassword = myPassword + '' + myChar;
                    console.log(myPassword);
                }
            }
            
            // This caps the password at the maximum length
            myPassword = myPassword.substr(0, charTotal)
        
            console.log(myPassword);

    }


//  var myPassword = generatePassword();
//  var passwordText = document.querySelector("#password");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
