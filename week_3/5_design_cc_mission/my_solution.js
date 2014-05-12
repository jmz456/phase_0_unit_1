// I worked [by myself, with: William Putra] on this challenge

// Your mission description:
// 
// Objectives: 
// King userName sets off on an adventure to save Princess Peach
// Grab mushroom to power up
// Kill the first ogre
// Search through the castle to get to the prison tower
// Get potion to heal up
// Kill the next ogre
// Destroy the prison door
// Save the princess

// Pseudocode
// Ask user for their name
// Ask user for choice of weapon
// if Battle Axe enter "You have a lot of courage"
// else if M-16 Machine Gun enter "You're not much of a thrill seeker, are you?"
// move down x1
// move right x2

// ask the user for a choice to eat a mushroom or pass it
// Put in if statement
// if true enter "This mushroom has given you mysterious might!"
// else "Too bad you should've taken the mushroom, it would give you a mysterious might. No time to turn back!"
// move right x2
// move down x1

// ask the user how they want to encounter the enemy
// if attack 
// else if summon a monster enter "hey stupid! you better run cause you dont know any magic!"
// else run 
// move down x1
// move left x1

// ask user the choice to drink the potion or to pass it
// if true enter "The potion has given you added courage! (not knowing it was Bacardi 151)"
// else enter "You should have drunk the Bacardi 151 potion because shit's about to get scary!"
// move up x1
// move left x1

// ask the user to attack or scream at the enemy
// if attack "Congratulations you have defeated the enemy!"
// else "Congratulations you killed the enemy with you alcohol breath!"
// move left x1
// move down x2

// ask the user whether they want to break down the tower's door
// if true enter "You saved the princess!!"
// else "You failed! the princess has died of starvation because you left her alone in the tower"


// Initial Code

confirm("Welcome to 'A kNights Reality' are you ready to play?");
var userName = prompt("Welcome brave and noble Sir.  What is your name?");
var weapon = prompt("Hello Sir " + userName + ".  Please choose your weapon for this mission: battle Axe or M-16 Machine Gun.").toUpperCase();

var player = {
    name: userName,
    weapon: weapon,
    health: 100,
    location: {
      x:0, 
      y:0
      },
    moveRight: function() { 
      this.location.x += 20 
        };
    moveLeft: function() { 
      this.location.x -= 20 
        };
    moveUp: function() {
      this.location.y += 20 
        };
    moveDown: function() {
      this.location.y -= 20
        };
    }

if(weapon==="BATTLE AXE") {
    console.log("A courageous Knight thou art!");
    }
else  {
    console.log("Aha, the Machine Gun... not much of a thrill seeker, are you?  Carry on!")
    }

var mushroom = prompt("You've come across some strange spotted mushrooms in the meadow.  Will you be consuming these potentially dangerous fungi?  Select 'eat' or 'pass'.").toLowerCase();
if(mushroom === "eat") {
    console.log("You have chosen... wisely.  The mushrooms you have consumed contain psilocybin, giving you the sensation of mysterious might!  CHARGE!");
}
else  {
    console.log("A sound mind you chose to possess.  Otherwise you would have been tripping balls.  Wise choice Sir " +userName+ ".");
}


var enemy1 = prompt("You have encountered a gastly looking ogre, how will you choose to encounter him: attack, summon, or run?").toLowerCase();

if(enemy1 === "attack") {
    console.log("You wield your " + weapon + " around and show that ogre who's boss.")
}
else if (enemy1 === "summon") {
    console.log("What the heck are you thinking!  You don't possess any magic!  You better start runnin' dammit!");
}
else {
    console.log("Excellent choice Sir " +userName+ ".  You must have known that Ogre is too slow for you.");
    }
    
    
var potion = prompt("You've found yourself amoung a Wizard's Alchemy Lab.  There is a clear potion labeled, 'Save for Ogre Hour.'  Will you 'drink' or 'save'?");
if(potion === "drink") {
    console.log("Not realizing our hero just downed a giant potion of BACARDI 151, he has suddenly redefined 'Dutch courage.'");
}
else {
    console.log("As you attempt to save this large potion, you realize your armor has not pockets and you left your backpack at camp.  Can't let a random potion go to waste! So down every drop of the giant potion.  It reminds you of your college days when you blacked out on BACARDI 151.  You black out and continue the quest.")
    }


var enemy2 = prompt("You encounter the BEAST!  You wet yourself in your stainless steel armor, not realizing that the nitrogenous substances will actually stain the steel.  However, the quest must go on... why? because that's what the game says to do.  At this point, your tripping your brains out if you ate the shrooms, you drank you about 2 liters of BACARDI 151, however, on a brighter note, you've blacked out so you shouldn't remember a thing.  You confront the BEAST!  What will you do? 'attack' or 'scream'");
if(enemy2 === "attack") {
    console.log("You throw your " + weapon + " at the BEAST and it hits him in the knee cap.  The BEAST buckles onto one knee and you knee butt the BEAST in the face with your pee stained armor which by coincidence has create a toxic concotion of BACARDI and urine.  The BEAST suffers an allergic reaction from your stained steel armor and dies on contact.  However, you're in a blackout phase and will never reap the rewards of your labor.  Carry on wayward Sir!")
    }
    
else {
    console.log("You throw your " + weapon + " at the BEAST and it hits him in the knee cap.  The BEAST buckles onto one knee and you run up and scream into the BEAST's face as you attack.  The BEAST suffers an allergic reaction of breath poisoning from your stank alcohol Bacardi breath and eggs you ate for a hearty breakfast before your quest. Yahhh!");
    }


var tower = prompt("You come upon this medevil looking tower with one door and one window.  Never knowing when your quest will near its end, you approach the giant wood and iron tower door.  Make your choice: 'break door' or 'continue quest'.");

if(tower === "break door") {
    console.log("Congratulations... you've saved the Princess, gave her a big kiss and saved the day.  However, this is the reality... and you thought it would be a good idea to start off with playing with knives, downing a bunch of shrooms, waving your weapon at pedestrians, steal a bottle of BACARDI from a liquor store, destroy the gnomes in your garden and expect your girl to welcome you with a big kiss... so with sound advice, Sir " +userName+ " I plead to you, DON'T DO DRUGS.");
    }
else {
    console.log("Unknowingly making such a poor choice to not listen for what might be behind the door, a poor princess sits tied to a chair with a gag in her mouth, waiting for her next hero... THE END.");
    }
    

// Refactored Code

var player = {
    name: userName,
    weapon: weapon,
    health: 100,
    location: {x:0, y:0},
    moveRight: function() { this.location.x += 20 };
    moveLeft: function() { this.location.x -= 20 };
    moveUp: function() { this.location.y += 20 };
    moveDown: function() { this.location.y -= 20 };
    };


// Reflection


//What parts of your strategy worked?  What problems did you face?
	//Strategy was little difficult because getting our code to execute the idea of movement was confusing.  While its part or
	//series in our code, we don't know how it will execute.  However we did make plenty of use of prompts with if and else
	// statments.  Those were easy to test. 
//What questions did you have while coding?  What resources did you find to help you answer them?
	//The big question is how to portray movement like in codecombat.  While we did display it in our code, we were hesitant to
	/*keep it in.  While its in our pseudocode, we removed them for the sake of flow in the code.*/
//What consepts are you having trouble with, or did you just figure something out?  If so, what?
	/*We're having trouble with how to run functions within our code and test them.  We've switched between node.js and the browser
	console and don't really understand how to get functions to execute properly.*/
//Did you learn any new skills or tricks?
	/*I sure learned how to set a prompt and confirm display a bunch of times.  I also learned that I could test out small bits of code through
	the browser console.  It really helps out with finding errors.*/
//How confidient are you with each of the Learning Competencies?
	/*Sadly, the part of the learning competencies I lack the most is integrating HTML, CSS and JS to display and manipulate objects.
	In addition, understand how functions play a key role in all of this*/
//Which parts of the challenge did you enjoy?
	/*Being create was my favorite part of the challenge, but I got carried away down the rabbit hole.*/
//Which parts of the challenge did you find tedious?
	/*The part of the challenge that was most tedious was searching for small type-o's throughout the code.  I've said this before
	and I think I need to come up with a solution to avoid this as a code.*/
// 
// 
// 
// 
// 
// 
// 