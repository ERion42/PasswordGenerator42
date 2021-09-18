document.getElementById("output").innerHTML = "This is the output section:";



function createPassword() {


    // document.getElementById("output").innerHTML = "password1234"
    var myPassword = ''
    var charType = ''
    var specChar = ''
    var myCriteria = ''

    var letters = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var specChar = ['~','!','@','#','$','%','&','*']
    var myUcase = ''
    var myLCase =''
    var mySChar =''
    var myNum =''
    var useLCase = ''
/*

    //Input Length Criteria:
    var isSatisfied = false;
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
        isSatisfied = true;
    }
*/
    //for testing purposes only
    charTotal = 12;

    // Use input to build arrays

    var useNum = confirm("Do you want to use numbers?");
    var useSChar = confirm("Do you want to use special characters?");
    var useUCase = confirm("Do you want to use uppercase letters?");
    var r4 = confirm("Do you want to use lowercase letters?");

    if ((useNum + useSChar + useUCase + useLCase) < 2) {
        alert("That will be a terrible password.");
    }
    else {
            // create array that will give us total number of iterations
            // it will also help us build the password
            const criteriaArray = [];
            criteriaArray[0] = charTotal;
            criteriaArray[1] = useNum;
            criteriaArray[2] = useSChar;
            criteriaArray[3] = useUCase;
            criteriaArray[4] = useLCase;            

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
            myPassword = myPassword.substr(0, charTotal)
        console.log(myPassword);
        }
/*

    if (isSatisfied === true) {
        for (i = 0; i < charTotal; i++) {
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
    }
    
*/
  
    // End of Function
}