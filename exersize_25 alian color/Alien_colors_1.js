"use strict";
//create a variable called alien  color
let alien_color = 'green';
//write an statement to test wheatherthe alien's color is green , if it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Player just earned 5 points !");
}
//write one version of this program that passes the if test and another that fails . 
alien_color = 'yellow';
//(the version that fails will have no output.)
if (alien_color === 'green') {
    console.log("Player just earned 5 points !");
}
