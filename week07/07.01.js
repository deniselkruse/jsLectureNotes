//SPREAD OPERATOR//
/* The spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements. 
Denoted by "..." */

const fullName = ['Denise', 'Kruse'];
// ...fullName // 'Denise', 'Kruse'

const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Ms.');
console.log(fullName, copiedFullName);

// SPREAD OPERATOR AND NUMBERS

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.59];
// console.log(Math.min(prices));
console.log(Math.min(...prices));

// SPREAD OPERATOR AND OBJECTS

const persons = [{name: 'Denise', age: 37}, {name: 'Michael', age: 36}];
const copiedPersons = [...persons];
// console.log(copiedPersons);

persons.push({name: 'Lisa', age: 42});
persons[0].name = 'Denise L';
console.log(persons, copiedPersons);

/*
    - JS has 5 data types that are passed by value: Boolean, Null, Undefined, String, and Number. These are known as primitive data types. 
        - If a primitive data type is assigned toa  variable, we can think of that variable as containing the primitive value.

        let x = 10 ;  <- number
        let y = 'abc'; <- string
        let z = null; <- null

        // x contains 10, y contains 'abc', z contains null - all of these values are primitive data types

        VARIABLES   VALUES
        x           10
        y           'abc'
        z           null
        a           10
        b           'abc'

        // When we assign the above variables to another variable using =, we copy the value to the new variable, and they are copied by value.

        let a = x;
        let b = y;

        - JS has 3 data types that are copied/passed by referene: array, funtion, and object. These are all technically objects, so we'll refer to them collectively as objects.
            - Variables that are assigned a non primitive data type are given a reference to that value. The reference points to that object's location in memory. The varialbels don't actually contain the value.
            - Objects are created at a location on your computer's memory. When we write "arr = []"", we've created an array in memory. What the varriable "arr" receives is the address (or location) of that array in memory.

            let arr = [];

            VARIABLES   VALUES      ADDRESS     OBJECTS
            arr         <#001>      #001        []

            arr.push(1)

            VARIABLES   VALUES      ADDRESS     OBJECTS
            arr         <#001>      #001        [1]

            - When a reference type value, or non primitive data type (arr, function, object) is copied to another variable using =, the address of that value is what is actually copied over as if it were primitive. Arrays, functions, and objects are copies by reference value, instead of a primitive value.

            let reference = [1];
            let refCopy = reference;

            VARIABLES   VALUES      ADDRESS     OBJECTS
            reference   <#002>      #002        [1]
            refCopy     <#002>      

            - Each variable now contains a referene to the same array. That means if we alter one of the variables, the other will see the same changes.
*/

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

console.log(x, y, z, a, b);

let arr = [];
console.log(arr);

arr.push(1);
console.log(arr);

let reference = [1];
let refCopy = reference;
console.log(reference, refCopy);

reference.push(2);
console.log(reference, refCopy);

// SPREAD OPERATOR AND AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY

const persons = [{name: 'Denise', age: 37}, {name: 'Michael', age: 36}];

// If we want to avoid changing both the original and the copied array, we would need to copy every object as well.

const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
})) // Since we are returning something in curly braces (object), we have to enclose it in parenthesis so that JS doesn't think it is the function's body. 

persons.push({name: 'Lisa', age: 42});
copiedPersons[0].name = "Denise L.";

console.log(persons, copiedPersons);