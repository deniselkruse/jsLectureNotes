//CHALLENGE 1
// Given dogArray, create a new array dogStatements.
// In dogStatements, you should have "____ is a good dog" if the dog's name is 12 characters or less.
// If the dog's name is greater than 10 characters, you should have "_____ is a VERY good dog".
// ['whippet is a good dog', 'st bernard is a good dog', etc. ]
// PLEASE USE: for-in or for-of, and a ternary


const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];

// let arr = [];
// arr.push(0); // [0]
// arr.push(1); // [0, 1]
// arr.push(2); // [0, 1, 2]
// console.log(arr);

let dogStatement = [];

for (let dog of dogArray) {
    dogStatement.push(dog.length <= 12  ? `${dog} is a good dog`: `${dog} is a VERY good dog`)
    }
console.log(dogStatement);


// CHALLENGE 2
// Given dogStatements (output of first challenge), console.log:
// wHiPpEt iS A GoOd dOg
// sT BeRnArD Is a gOoD DoG
// etc.
// PLEASE USE: ONE for-of, ONE for-in, and a ternary

for (const dog in dogStatement) {
    if (object.uppercase(key)) {
        const dog = dogStatement[dogArray];   
    }
}