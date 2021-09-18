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
    //  It does not:
        //create the password
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


    // Use input to build arrays
    var useUCase;
    var useLCase;
    var useSChar;
    var useNum;
    var r1 = confirm("Do you want to use numbers?");
    var r2 = confirm("Do you want to use special characters?");
    var r3 = confirm("Do you want to use uppercase letters?");
    var r4 = confirm("Do you want to use lowercase letters?");

    if ((r1 + r2 + r3 + r4) < 2) {
        // only one type of character ain't good enough
        alert("That will be a terrible password. You need more than one category.");
        return;
    }
    else {
            // create array that will give us total number of iterations
            // it will also help us build the password
            const criteriaArray = [];
            criteriaArray[0] = charTotal;
            criteriaArray[1] = r1;
            criteriaArray[2] = r2;
            criteriaArray[3] = r3;
            criteriaArray[4] = r4;            

            // Here's where we build the password

    }


//  var myPassword = generatePassword();
//  var passwordText = document.querySelector("#password");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
