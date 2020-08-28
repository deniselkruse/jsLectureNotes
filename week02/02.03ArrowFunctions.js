
// A0. ARROW FUNCTIONS

// Arrow functions are always expressions. This means we can use them anywhere we use expressions.

// => 

// concise-body arrow function

let f = (x) => x + 5;

console.log(f(40));

// block-body arrow function

let g = (x) => {
    console.log(x);
    return x + 6;
}

console.log(g(7));


const f0 = (x) => 3 * x;

const f1 = (x) => {
    return 3 * x;
};

function f2 (x) {
    return 3 * x;
}

let arr = [0,1,2,3,4,5,6,7,8,9];

// I want: [0, 3, 6, 9, ...]

function threeTimes (x) {
    return 3 * x;
}

console.log(arr.map(x => 3 * x));

const averageThree = (x, y, z) => Math.round((x + y +z) / 3);

console.log(averageThree(46, 17, -2));

// 1. BUILDING UP EXPRESSIONS

const returnFirstArg = (x, y) => x;
const returnSecondArg = (x, y) => y;

const returnThree = (x) => 3;
const returnFalse = (x) => false;

const multiplyNumbers = (x, y) => returnThree((x +3) * y);


const nameJoiner = (first, middle, last) => `${last}, ${first}, ${middle}`;

console.log(`Hi, I am ${nameJoiner('Denise', 'L.', 'Kruse')}`);
