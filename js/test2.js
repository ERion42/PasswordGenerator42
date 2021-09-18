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
        alert("That will be a terrible password.");
    }
    else {
            const criteriaArray = [];
            criteriaArray[0] = charTotal;
            criteriaArray[1] = r1;
            criteriaArray[2] = r2;
            criteriaArray[3] = r3;
            criteriaArray[4] = r4;            
            console.log("The password will contain " + criteriaArray[0] + " characters.")
            console.log(criteriaArray[1]);
            console.log(criteriaArray[2]);
            console.log(criteriaArray[3]);
            console.log(criteriaArray[4]);
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