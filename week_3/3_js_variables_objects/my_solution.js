// I paired [Jeremy Wong] on this challenge.




// Pseudocode
// set a variable for secret number, let it equal 1
// set a variable for secret number, let it equal 7
// set the variable password to a string, let it equal
// set the var allowedIn equal to a boolean false or true
// make members an array
// make the first element in the array "John"
// make the fourth element "Mary", put blank strings for the second and third element

// __________________________________________
var secretNumber = 1;
var secretNumber = 7;
var password = "password";
var password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = [];
var members = ["John"];
var members = ["John", "","", "Mary"];



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var memebers = ["John", "", "", "Mary"];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// Write your code below.
// What parts of your strategy worked?  What problems did you face?
//   There wasn't any real strategy involved.  The problem was understanding what needed to be accomplished by reading our instructions.
//   Having a visual idea of what was supposed to happen was a slight challenge at first.  After observing the errors in node.js, the 
//   details started to come together.  
// 
// What questions did you have while coding?  What resources did you find to help answer them?
//    I didn't have any real questions throughout the coding.  I actually spent an excessive amount of time reading about JavaScript and
//    going through some tutorial with codecademy.  
//
// What concepts are you having trouble with, or did you just figure someting out? If so, what?
//    The main concept I'm having trouble with is separating how JavaScript and Ruby are written in my head.  I'm actually getting the two
//    languages confused with each other.  The other is reading code aloud.  My pairing partner did an amazing job in interpreting code
//    and made me realize I need to be able to do this too.

// Did you learn any new skills or tricks?
//    I think I've embedded how to assign a variable in JS in my head.  In all seriousness.  Test-Driven Development is an A+ in my book.
//    I'll be sure to utilize at every instance I can.

// How confident are you with each of your learning competencies?
//    I would say I'm fairly confident with all aspects.  Defining variables was easy and practice has solidified it... I hope.
//       
// Which parts of the challenge did you enjoy?
//    I liked interacting with the code and finding the problem areas.  I don't know how well that will turn out in the future, but having the
//    the chance solve the issue was pretty cool.
//
// Which parts of the challenge did you find tedious?
//    The challenge was pretty short, so nothing really tedious.
//
//
// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

