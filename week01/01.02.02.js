// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let coltsPlayer = {
    name    :   "TY Hilton",
    number  :   13,
    position:   "Wide Receiver",
    active  :   false,
    stats   : {
        touchdowns: 46, 
        rushingYards: 55, 
        allPurposeYards: 9258
    }
}
console.log(coltsPlayer.stats.allPurposeYards);

console.log(typeof (coltsPlayer.stats.allPurposeYards));

if (typeof coltsPlayer.stats.allPurposeYards != String || Number || Boolean || Object) {
console.log("What are you?!")
} /* Note: I am not sure that this is correct... because the typeof is a number, so it should not print "What are you?!"...

/*INSTRUCTOR CODE*/

let myObject = {
    string  : 'string',
    number  : 4,
    boolean : true,
    obj     : {
        key: 'sample'
    }
}
console.log(typeof myObject.number);

let value = myObject.obj.key;

if (typeof value === 'string') {
    console.log('this value is a string');
}   else if (typeof value === 'number') {
        console.log('this value is a number');
}   else if (typeof value === 'boolean') {
        console.log('this value is a boolean');
}   else if (typeof value === 'object') {
        console.log('this value is an object');
}   else {
        console.log('What are you?!');
}