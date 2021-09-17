document.getElementById("output").innerHTML = "This is the output section:";



function createPassword() {


    // document.getElementById("output").innerHTML = "password1234"
    var myPassword = ''
    var charType = ''
    var specChar = ''
    var myCriteria = ''

    var letters = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var specChar = ['~','!','@','#','$','%','&','*']

    do {
        text += "the Number is " + i;
        i++;
    } while 
    (i < 10);
    


    //Input Criteria:
    isSatisfied = 0;
//    do {
        var charTotal = prompt("How many characters would you like to use for your password?");
        if (charTotal = 0) {
            alert("That number is too low to be secure. Choose a larger one.");
        } else if (charTotal > 128) {
            alert("That number is too high. Choose a lower one.")
        } else if (isNaN(charTotal)) {
            alert("That is not a number. Choose a number between 8 and 128.");
        } else {
            isSatisfied = 1
        }
//    } while (isSatisfied = 0);



/*


    //Randomly add x characters from 4 random categories
    //This works, but it has a problem in that it doesn't:
        //Allow User Input
        //Include 1 character from each category
        //Check validity

    // for testing purposes only
    //var x = 12;
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

*/
    // End of Function
}