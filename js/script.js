// Assignment Code
    //  Currently this just allows the user to select the total number of characters
    //  and the types of characters (user must select two or more)
    //  It builds a password that contains one of each of the selected values.
    //  No errors seen in console.
    // Known Issues:
        // Refreshing the page is required beyond the first use.
        // Beautification is required on the buttons for the input questions


var generateBtn = document.querySelector("#generate");
// Generate arrays to draw from later
var letters = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specChar = ['~','!','@','#','$','%','&','*']
var myPassword = ''

// Write password to the #password input
function writePassword() {

    // Input maximum character length
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
        // Acceptable length reached!
    }

    // Determine which criteria need to be met for character types
    var useNum = confirm("Do you want to use numbers?");
    var useSChar = confirm("Do you want to use special characters?");
    var useUCase = confirm("Do you want to use uppercase letters?");
    var useLCase = confirm("Do you want to use lowercase letters?");

    if ((useNum + useSChar + useUCase + useLCase) < 2) {
        // only one type of character ain't good enough. Start over.
        alert("That will be a terrible password. You need more than one category.");
        return;
    }
    else {
            // Here's where we build the password
            //Step through the process adding one character per selected character class then starting over and repeating until all characters have been chosen
            for (i = 0; i < charTotal; i++) {
                if (useNum === true) {
                    myNumber = Math.floor(Math.random() * 10);
                    myChar = myNumber;
                    myPassword = myPassword + '' + myChar;
                    console.log(myPassword);
                }
                if (useSChar === true) {
                    mySChar = Math.floor(Math.random() * specChar.length);
                    myChar = specChar[mySChar];
                    myPassword = myPassword + '' + myChar;
                    console.log(myPassword);
                }
                if (useUCase === true) {
                    myUcase = Math.floor(Math.random() * letters.length);
                    myChar = letters[myUcase];
                    myPassword = myPassword + '' + myChar.toUpperCase();
                    console.log(myPassword);
                }
                if (useLCase === true) {
                    myLCase = Math.floor(Math.random() * letters.length);
                    myChar = letters[myLCase];
                    myPassword = myPassword + '' + myChar;
                    console.log(myPassword);
                }
            }
            // This caps the password at the maximum length
            myPassword = myPassword.substr(0, charTotal)
    }
    // I have the password, now I just have to pass it. 
    var finalPassword = document.querySelector("#password");
    finalPassword.placeholder = myPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
