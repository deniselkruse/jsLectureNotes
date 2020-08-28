/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression.

        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 

        - function expressions are not hoisted, and are generally stored in variables

            - after a function has been stored in a variable, that variables name can then be called to run the function

    - functions without names are known as anonymous functions
*/

// FUNCTION DECLARATIONS

sayHello(); // you can call/invoke the function before the function is declared because it is hoisted

function sayHello() {
    console.log('hi');
}

// sayHello; // won't run. Parantheses are what tells the function to run

sayHello(); // function invocation, or function call

// FUNCTION EXPRESSIONS

// generally stored within variables
// function expressions do not get hoisted

// greetings(); // will not run because function expressions do not get hoisted

let greetings = function() { // anonymous function; not necessary to give it a name since it is stored within a variable
    console.log('hello');
}

greetings(); // invoke the variable to invoke the anonymous function

/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.

    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog (pitbull) { // 'pitbull' is a parameter
    if(pitbull === undefined) {
        console.log('no argument was passed');
    } else {
        console.log(`My dog's name is ${[pitbull]}.`);
    }
}

myDog('Juicy'); // 'Juicy' is the argument, or the value we're passing to the parameter of 'pitbull'

let pet = myDog // Notice we are not calling or invoking the funtion; assigning the function 'myDog' to a variable named 'pet'. I don't want the function to run, I just want to assign it to the variable of 'pet'. This is known as a function reference. The variable of 'pet' is referring to the function of 'myDog'.

pet(); // this will run the function, but since we did not include an argument, no value is assigned to the parameter
pet('Juicy');
pet('Hank');

// MULTIPLE PARAMETERS AND ARGUMENTS

function allMyDogs (smallPitbull, largePitbull, lisaPitbull, momDog, dennisDog) {
    if (smallPitbull === undefined || largePitbull === undefined || lisaPitbull === undefined) { // assigning default values will also work
        console.log('no arguments passed');
    } else {
        console.log(`My dogs are named ${smallPitbull}, ${largePitbull}, and ${lisaPitbull}.`);
        console.log(momDog, dennisDog);
    }   
}

allMyDogs('Juicy', 'Hank', 'Hamilton', 'Tucker', 'Ziggy'); // the arguments we pass into our function call are assigned by position or by order. First argument gets assigned to first parameter, etc.

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

// find average weight

function calculator(one, two, three) {
    // console.log(one, two, three);
    let totalWeight = one + two + three;
    // console.log(totalWeight);
    let average = Math.round(totalWeight / 3); //Math.round rounds the number to the nearest integer
    // console.log(average);

    return(average); // can also use Math.round() here.
}

let averageWeight = calculator(15, 60, 55); // becauase we are returning a value from the function, we need a new variable to capture the return value. Then, when we invoke, or call, the calculator function, the value that we return from that function is the value that's assigned to the averageWeight variable. 
console.log(averageWeight);
