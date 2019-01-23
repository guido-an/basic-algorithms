var hacker1 = "Marco";
var hacker2 = window.prompt("What is your name");
var hacker3 = window.prompt("New palindrome string");

console.log("The driver name is " + hacker1);
console.log("The navigator name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
  else if (hacker2.length > hacker1.length) {
    console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
  } else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters")
  }

  var array = [];
  for (var i = 0; i < hacker1.length; i++) {
     array.push(hacker1[i].toUpperCase());
  }
  console.log(array.join(" "));


  for (var i = hacker2.length; i >= 0 ; i--) {
    var reverse = hacker2[i];
    console.log(reverse);
  }

  var arrayWithNames = [hacker1, hacker2];
  var sortedArray = arrayWithNames.sort();
  var finalArray = sortedArray;

  console.log(sortedArray);




// ****** BONUS ****** 
  
 function palindrome(myString) {
    // remove special characters
    var newVar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // make newVar an array, reverse it and make it a string again
    var reverseName = newVar.split('').reverse().join('');
   
    // check if myString is palindrome
    if(myString == reverseName) {
      console.log("This is palindrome");
    } else {
      console.log("This is not palindrome");
    }
  }

  palindrome("anna"); 














  




