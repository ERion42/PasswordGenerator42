// generate random letter
var letters = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specChar = ['~','!','@','#','$','%','&','*']

//var arrayLength = (letters.length)
//for(i=0; i < arrayLength; i++) {
//    console.log(letters[i]);
//}

console.log("Create a random letter")
var x = letters.length;
console.log(x);
console.log(Math.random())
y = (Math.floor(Math.random() * x -1));
console.log(y);
console.log(letters[y]);


console.log("Decide on type of character")
x = 4
y = Math.floor(Math.random() * 4) +1;
console.log(y)
if(y = 1) {
    console.log("Lowercase")
} else if(y = 2) {
    console.log("Uppercase")
} else if(y = 3) {
    console.log("Numeral")
} else {
    console.log("Special Character")
}


console.log("Establish Object with arrays")
var arrays = {
    lettersArray: ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    specCharArray: ['~','!','@','#','$','%','&','*']
}
console.log (arrays.lettersArray);
var x = arrays.specCharArray;
console.log(x.length + " options.");

console.log(function getRandomLower());