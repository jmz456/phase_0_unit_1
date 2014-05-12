// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //RESCUE MISSION
// PSEUDOCODE: downx2 - rightx1 - upx2 - downx1 - attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp(); 
this.moveUp();
this:moveRight();
this:moveRight();
this:moveDown();
this:moveDown();
this.attackNearbyEnemy();


//GRAB THE MUSHROOM
//PSEUDOCODE: up1 - right1 - left1 - up1 - attack
this.moveUp();
this.moveRight();
this.moveUp();
this.moveLeft();
this.moveUp();


//DRINK ME
//PSEUDOCODE: attack - down - potion - up - right - attack
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//TAUNT THE GUARDS
//PSEUDOCODE: right 1 - opendoor - right 1 - speak - left1 - right3 - ...
this.moveRight();
this.bustDownDoor();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!")
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!")
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


//IT'S A TRAP
//PSEUDOCODE:down2 - speak - up2
this.moveDown();
this.moveDown();
this.say("Hello there!");
this.moveUp();
this.moveUp();


//BREAK THE PRISON
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
// PSEUDOCODE: William Ture - Krogg False - Lucas True - Gort and Brack False - Marcus and Robert True - Grul'thock False - Gordon True - right1
if(name === "William")
    return true;
if(name === "Krogg")
    return false; // <-- Start here; Krogg is not a friend!
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "Grul'thock")
    return false;
if(name === "Gordon")
    return true;



//TAUNT
//PSEUDOCODE:say x 4
this.say("Hey!");
// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Hey blueboy!");
this.say("You're a girl!");
this.say("Hey mama's boy!");


//COWARDLY TAUNT
// PSEUDOCODE:find x,y taunt zone - speak - find x,y safe zone
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
// Run your soldier out where the ogres can hear you.
this.moveXY(51,37);
this.say("Follow me!");
// Say something!
// Then run back behind the arrow towers for safety.
this.moveXY(70,10);
// You can shift+click on the map to insert coordinates.



//COMMANDING FOLLOWERS
// PSEUDOCODE:speak to army, find (x,y) battle zone - find (x,y) cover
// PSEUDOCODE:speak to army, find (x,y) single battle ogre - find (x,y) cover - repeat
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Let's play follow the leader!");
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(66,50);
this.say("attack");
this.moveXY(70,50);
// Make sure Tharin is safe!


//MOBILE ARTILLERY
//move to xy - attack xy - attack xy
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(87,36);
this.moveXY(88,45);
this.attackXY(65,55);
this.attackXY(77,47);
this.moveXY(87,57);
this.moveXY(63,50);
this.attackXY(49,65);
this.attackXY(54,60);



// Reflection:


//What is 'this' refering to?  Think programming-wise rather than in the terms of the game.
	//"this." is the part of the javaScript fuction that tells us it's an object

//What does the () do in javaScript?
	//() is the part that is for arguements and executes those arguements if there is one

//What is the point of the semicolons?
	//';' is to tell the end of the function or end of the command.

//What parts of your strategy worked?  What problemds did you face?
	//Creating a pseudocode prior to every exercise was helpful in creating a habit to not just pre-code, but to create foresight.
	//My code of the exercises wasn't always right, but it did help me to reflect back on what I was thinking prior to the exercise.
	//My only problems were type-o's.  Having to find errors in the code and understanding the need for accuracy is duely noted.

//What questions did you have while coding?  What resources did you find to help you answer them?
	//There weren't any questions to the coding.  However, there was the "why" when coding.  Why did I need a semicolon?  Why can't I 
	//enter arguements between () yet?  Why isn't my code executing?(type-o)

//What consepts are you having trouble with, or did you just figure something out?  If so, what?
	//I'm having trouble with how all of this ties together with html, css, and ruby.  I know they work together, but how exactly?

//Did you learn any new skills or tricks?
	//Aside from learning a few lines of javaScript code, nothing groundbreaking.

//How confidient are you with each of the Learning Competencies?
	//I'm semi confident about the learning competencies.  I understand them, I can talk about them with someone, but I don't know how I would
	// lead a conversation with the learning competencies.
//Which parts of the challenge did you enjoy?

//Which parts of the challenge did you find tedious?
	//While codecombat is entertaining and a step away from the norm, it's incredibly slow and the wait time to load a page or run a script
	//is too long a wait, but not long enough to work on another task while i wait.  I'm buring a ton of time with this game.
 
 
 
 
 
 
 
