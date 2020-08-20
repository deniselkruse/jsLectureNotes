
/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

// ELSE IF

let FB = 30; 

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('FizzBuzz');
}   else if (FB % 5 == 0){ 
    console.log('Buzz'); 
}   else if (FB % 3 == 0){
    console.log('Fizz')
}   else {
    console.log('This FizzBuzz is broken.')
}

// SWITCH STATEMENT


let FB2 = 30;

switch(true){
    case (FB2 % 3 === 0 && FB % 5 === 0):
        console.log('FizzBuzz');
        break;
    case(FB2 % 5 == 0):
        console.log('Fizz');
        break;
    case (FB2 % 3 === 0):
        console.log('Buzz');
        break;
    default:
        console.log('This FizzBuzz is broken.')
}

// TERNARY

let fB = 30;

fB % 3 === 0 && FB % 5 === 0 ? console.log('FizzBuzz') :
fB % 5 === 0 ? console.log('Fizz') :
fB % 3 === 0 ? console.log('Buzz') :
console.log('This FizzBuzz is broken.');
