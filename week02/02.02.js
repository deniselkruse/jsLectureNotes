/*
LITERALS
*/

console.log(`string ${3 +7}`)

let x = -4.8
console.log(x);
console.log(-4.8);

let obj = {
    a: 4, 
    b: 9,
    c: 13,
    d: 0,
    e: -1000
}

console.log(false);

console.log(null);

console.log(undefined);

console.log(typeof undefined);

let arr = [8, 14, 66, 30, null];

//Statements & Expressions

// Shannon
// Shannon is a good dog.

if (3 > 0) {
    console.log('three is greater than zero');
}

for (let i of ['a' + 'at', 'b' + 'at', 'c' + 'at']){
    console.log(i);
}

for (let i of (2 > 3) ? [0,1,2] : ['a', 'b', 'c']) {
    console.log(i);
}

// Literals are expressions, and we can build up expressions with operators (+, -, etc.)

console.log(3 > 7);

//SCOPE

// let x = 5;

if (true) {
    let x = 11;
    const y = 14;
}

for (let i of [0, 1, 2]) {
    let x = 7;
    for (let j of ['a', 'b', 'c']){
        let x = 9;
        console.log(`${i}, ${j}: ${x}`)
    }
}

let a = 11;

function addNumbers (b){
    console.log(a + b);
}

addNumbers(10);

//Hoisting

function functionTwo (){
    console.log(functionOne());
}

functionTwo();

function functionOne(){
    return 4;
}

console.log(getWeather());

function getWeather (zipcode, date, format){
    let weather;

    // ...
    let result = getFromServer(zipcode);

    // ...

    return weather;
}

function getFromServer (zipcode){
    // ...

    parseResult(res);
    // ...
}

function parseResult (result){

}