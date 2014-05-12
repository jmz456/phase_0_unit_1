// Group project:
// Person 3: James Miller & Jeremy Wong

// Create Proper arrays
var add = [1, 2, 3, 4, 5, 9];

//var each = function(array,func){
//    for (var i=0; i<array.length; i++) {
//        func([array]); 
//        }
//    };

// TO CALCULATE THE SUM:
// create a function called sum that take an array as a parameter/argument
// inside the function, create a variable called 'answer' and set it equal to 0
// check / go through all elements inside the array using "for" loops
// add each element in the array to 'answer' and put the result of that addition back to 'answer', closed the for loop
// return 'answer' and exit the function
function sum(sumArray){
var answer = 0;
//var answer = each(sumArray,function(x){
 //   return x;
//});
for (var i=0; i<sumArray.length; i++) {
var answer = answer + sumArray[i];}
return answer
};
console.log("Your sum is " + sum(add));




// TO CALCULATE THE MEAN:
// create a function called mean that take an array as a parameter/argument
// inside the function, create a variable called 'answer' and set it equal to 0
// check / go through all elements inside the array using for loops
// add each element in the array to 'answer' and put the result of that addition back to 'answer', closed the for loop
// return 'answer' divided by the length of the array and exit the function
var mean = function(meanArray){
    var answer = 0;
    for (var i=0; i<meanArray.length; i++){
    var answer = answer + meanArray[i];
    var means = answer / meanArray.length;}
    return means;
};
console.log("Your mean is " + mean(add));



// TO CALCULATE THE MEDIAN:
// create a function called median that take an array as a parameter/argument
// inside the function, sort the array in ascending order using .sort method
// create a variable called 'middleNum' and set it equal to the result of calling Math.floor method on (length of the array divided by 2)
// use if and else statement
// if the length of the array is even number

// access the 'middleNum' of the array and the 'middleNum-1' of the array, add them together and divide it by 2. Return the result of this.
// else
// access the 'middleNum' of the array and return it
// exit the function
var median = function(medianArray) {
	var upArray = medianArray.sort();
// 	console.log(upArray);
	var middleNum = Math.floor(upArray.length / 2);
	if (upArray.length % 2 === 0) {
	    var middle = (upArray[middleNum-1] + upArray[middleNum]) / 2;
	    return middle;
	} else {
	    var middle = (upArray[middleNum]);
	    return middle;
	}
};
console.log("Your median is " + median(add));


/*reflection 

What parts of your strategy worked?  What problems did you face?
	We had to interpret the pseudocode and write the code based on it.  We first approached the pseudocode line by line.
	We realized we needed to read all the pseudocode to better gain an understanding of how we were going to write the code.
	We ran into problems with the code, but my partner was good with refering to our resources.  Jeremy did a great job
	in navigating and helped me as a driver.  Being a driver was helpful for me as I could gain further understanding
	of the code.
What questions did you have while coding?  What resources did you find to help you answer them?
	I had more questions than anything else, but with this being a more difficult week, I wasn't sure what to ask.  
What consepts are you having trouble with, or did you just figure something out?  If so, what?
	My biggest on going trouble is how to write a block of code.  It's seems much more complicated than Ruby and while
	I can read most of the code and vaguely understand what happens, writing it is seriously a challenge.
Did you learn any new skills or tricks?
	I'm reading the code a lot better than I used to and better at predicting the results, but I'm a long way off from 
	confidence.
How confidient are you with each of the Learning Competencies?
	For this challenge, I feel quite low with my confidence to do this challenge.  It's been very frustrating and stressful
	for me to understand.  I feel like I've missed some vital information from somewhere.
Which parts of the challenge did you enjoy?
	This was a challenge I didn't enjoy mainly because I was so confused.  
Which parts of the challenge did you find tedious?
	Nothing was tedious in the project... just difficult.

*/