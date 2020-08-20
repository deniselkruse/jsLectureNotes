// /*
// ************
//  FOR LOOPS
// ************
//     - Loops offer us a quick and easy way to do something repeadetly

// /*
// ************
//  FOR OF LOOPS
// ************
//     - For Of Loops parse through an iterable list of numbers - so that makes them great for working with arrays
//     - Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains it's own index (the first item in an array has an index of 0, and so on). 
//                      value
//         let arr = ['chicken', 'turkey', 'duck']
//                        0         1        2
//                      index
// */

// let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd']
// // console.log(typeof pies);
// //let pie = 'string';
// //console.log(pie);

// /* BRONZE
//     - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
// */

// for (let pie of pies) {
//     console.log(`${pie} pie`);
// }

// /* SILVER
//     - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
//     - Use google to search for an array method that checks if an array includes a certain value
// */

// for (const pie of pies){
//     if (pie.includes ('blueberry')) {
//         console.log(`the ${pie} pie is a fruit pie`)  
//     } else {
//         console.log(`the ${pie} pie is not a fruit pie`)  
//     }
// }

// /* GOLD
//     - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
// */

// for (const pie of pies){
//     if (pie.includes('apple') || pie.includes('blueberry') || pie.includes('peach') || pie.includes('cherry')) {
//         console.log(`the ${pie} pie is a fruit pie`)  
//     } else {
//         console.log(`the ${pie} pie is not a fruit pie`)  
//     }
// }

/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. So although properties in an object don't contain an index like arrays, their properties can be simply counted. 
    -KEY - think a key in an object - goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects, and that means for of loops are best used with arrays
*/

// let obj = {
//     key1: 'value',
//     key2: 'value',
//     key3: 'value'
// }
// console.log(Object.keys(obj).length);

// for(let key of obj){
//    console.log(key);
//}
//code does not work because objects are not iterable

// /* BRONZE
//     - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.
// */
// let fellowshipOfTheRing = {
//     members: {
//         Gandalf: 'Staff',
//         Frodo: 'Sting',
//         Sam: 'Lembas Bread',
//         Aragorn: 'Anduril',
//         Legolas: 'Bow of the Galadhrim',
//         Gimli: 'Walking Axe',
//         Pippin: 'Barrow Blades',
//         Merry: 'Barrow Blades',
//         Boromir: 'Horn of Gondor'
//     },
//     purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
//     formed: '25 October, 3018',
//     dissolved: '26 February, 3019'
// }

// for (let character in fellowshipOfTheRing.members) {
//     console.log(character);
// }

// //dot notation
// console.log(fellowshipOfTheRing.members.Gandalf) // staff

// // object bracket notation / property accessors
// console.log(fellowshipOfTheRing['members']['Gandalf']);


/* SILVER
    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

for (let character in fellowshipOfTheRing.members){
    if (character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
        console.log(`${character}'s name does not begin with a vowel.`)
    } else {
        console.log(`${character}'s name does begin with a vowel.`);
    }
}

/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/

let arr = [];

for (let character in fellowshipOfTheRing.members){
    if (character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
        arr.push(character)
        console.log(arr)
    } else {
    console.log(`${character}'s name does begin with a vowel.`)
    }
}