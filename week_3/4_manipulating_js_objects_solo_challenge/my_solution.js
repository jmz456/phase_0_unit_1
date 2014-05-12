// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
      the value of a JavaScript Object object with no properties.
      set variable to adam equal to empty property
2. Give adam a name property with the value "Adam".
      name property Adam
3. Add a spouse property to terah and assign it the value of adam.
      terah's spouse property equals adam
4. Change the value of the terah weight property to 125.
      terah's weight equals 125
5. Remove the eyeColor property from terah.
      delete terah's eye color
6. Add a spouse property to adam and assign it the value of terah.
      adam's spouse property equals terah
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
      terah's children property set to empty
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
      terah's children property carson equals name "Carson"
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
      terah's children property carter equals name "Carter"
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
      terah's children property colton equals name "Colton"
11. Add a children property to adam and assign it the value of terah children.
      adams children propert equals terah's children property*/

// __________________________________________
// Write your code below.
var adam = {
  name: "Adam",
}
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = []
terah.children.carson = {name:"Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

// __________________________________________
/* Reflection: Use the reflection guidelines
// 
//What parts of your strategy worked?  What problemds did you face?
    /Syntax was the biggest problem of this section.  Understanding the properties of a particular 
    /variable posed confusion because of a different syntax.
//What questions did you have while coding?  What resources did you find to help you answer them?
    I had a ton of questions while coding.  A lot of code was trial and error.  Codecademy and the JavaScript intro
    from Dev Bootcamp helped put things together.
//What consepts are you having trouble with, or did you just figure something out?  If so, what?
    Understanding how JavaScript objects work together is the most confusing concept.  Also how to utilize a function
    and understand the code block that follows.
//Did you learn any new skills or tricks?
    I understand how object litterals can be manipulated by adding or removing properties.  I wouldn't call this a particular skill
    but it was something I had a hard time grasping before completing some of the codecademey challenges.
//How confidient are you with each of the Learning Competencies?
    I'm fairly confident that I can complete the Learning Competencies, but I need to refer to sources.  I can't do it from memory... yet.
//Which parts of the challenge did you enjoy?
    I have to honestly say, I didn't really enjoy this challenge.  Usually I like working with code I understand, but this has
    been quite frustrating to everything else we've done.  I only liked solving things through the TDD, but that's about all.
//Which parts of the challenge did you find tedious?
    As I look at the code now, I understand its simplicity.  However, from the pseudocode it's not as easy to workout.

*/ 


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)