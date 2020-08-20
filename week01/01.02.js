// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */

let myName = "Denise";
let friend = "Michael";

console.log(myName.length);
console.log(friend.length);


/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if (myName.length > friend.length) {
    console.log(`${friend}'s is shorter than ${myName}'s name.`)
} else if (myName.length < friend.length) {
    console.log(`${friend}'s name is longer than ${myName}'s name.`)
}

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

if (myName.length > friend.length) {
    let letters = myName.length - friend.length;
    console.log(`${friend}'s name is shorter than mine by ${letters} letters.`); 
}   else if (myName.length < friend.length) {
        let letters = friend.length - myName.length;
        console.log(`${friend}'s name is longer than mine by ${letters} letters.`);  
    } else {
        console.log('Our names are the same length.')
    }


//*END INSTRUCTOR PORTION *//

var name1 = 'Denise';
var name2 = 'Jeremy';

console.log(name1.length);
console.log(name2.length);

function nameCompare(x, y){
    var diff = x.length - y.length;

    if (x.length > y.length){
        console.log(x + " has a longer name than " + y + " by " + Math.abs(diff));
    } else if (x.length > y.length){
        console.log(x + " has a shorter name than " + y + " by " + Math.abs(diff));
    } else {
        console.log("It's a tie!");
    }
}

nameCompare(name1, name2);