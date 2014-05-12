// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. James Miiler
//  2. N/A


// 1. "YOU SIGNED... WHO?!"
var name = {
    name: "",
    age: ,
    quote: ""
};



// 2. "Here they Come!"
var adam = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's you home! Are you too good for your home?1"
};

var kristen = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you want to build a snowman?"
};    


var jim = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
};
console.log(adam.name + adam.age + adam.quote);
console.log(kristen.name + kristen.age + kristen.quote);
console.log(jim.name + jim.age + jim.quote);

// 3. "TIME IS MONEY!"
function Client(name,age,quote) { //constructor function - like a template
    this.name = name;
    this.age = age;
    this.quote = quote;
};

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"
var clients = [adam, kristen, jim, shooterMcGavin];
for (var i = 0; i < clients.length; i++) {
  console.log('Client name: ' + clients[i].name + '\n' + 'Client age: ' + clients[i].age + '\n' + 'Client quote: ' + clients[i].quote)
};


// ** BONUS **


//  Your Reflection:
/*
What parts of your strategy worked?  What problemds did you face?
	Understanding that our clients needed profiles, we set up objects to take specific properties.
What questions did you have while coding?  What resources did you find to help you answer them?
	I didn't understand object literals at first, but understanding that their like hashes in Ruby helped with the concept.
What consepts are you having trouble with, or did you just figure something out?  If so, what?
	Completing the 'for' command is a little bit of a challenge.
Did you learn any new skills or tricks?
	Understanding how objects can be manipulated.
How confidient are you with each of the Learning Competencies?
	I'm very confident with the Learning competencies now than prior to the session.
Which parts of the challenge did you enjoy?
	Understanding how they operate like hashes made manipulating the information interesting.
Which parts of the challenge did you find tedious?
	This was challenging, nothing tedious about it.
*/