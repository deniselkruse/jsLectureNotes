/*
************
  CLASSES
************

    - Classes are 'special functions' that can be defined by either class expression, or class declaration - just like regular functions

    - Classes act as a blueprint for creating objects that share methods and properties
        - We use that blueprint to create new objects or instances of that class, and each of these objects can have different values for properties they hold
            - Example: model could be a property of a class of Automobile, and each new automobile we create that's a copy of our original class, could have a different value for the property model 

  - The body of a class is in between the curly braces, again, just like regular functions
        - The body of a class is where you define class members, such as methods or a constructor
        - The constructor method is a special method for creating and initializing an object created with a class.
        - There can only be ONE method with the name of constructor in a class
            - A constructor can use the "super" keyword, to call the constructor of the super class
                - The "super" keyword is used to access and call functions (or methods) on an objects parent

    - JavaScript classes were introduced in ES5, and is a new way to write JavaScript's previous existing prototype-based inheritance, which - as previously mentioned - is a way of creating an object that acts as a blueprint, to create other objects that share the properties and methods as the parent
        - Classes are the closest thing in vanilla JavaScript to Object-Oriented Programming
*/

function myFunc() { // function declaration

}

let myFunc = function () { // function expression

}

function myFunc(string, number) {
    console.log(string, number);
}

myFunc('this is a string', 5);
myFunc('this is my second string', 10);

// CLASS DECLARATION

class Automobile {
    constructor(make, model) {
        //inside of the constructor, you must assign the names of the keys that will hold the parameters
        this.make = make;
        this.model = model;
        //      key      value

        // This refers to the object it belongs to
    }
}

//NOTE: Function declarations are hoisted, class declarations are not. A class declaration needs to be declared before accessing it.

// CLASS EXPRESSIONS
// Class expressions can be named or unnamed. 

// Unnamed Class Expression

let Vehicle = class {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}
console.log(Vehicle.name);

// Named Class Expression

let Vehicle = class VehicleTwo {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

console.log(Vehicle.name);

// METHODS 
// Methods are basically just functions that are passed down to all of the new instances of our class that we create.

// method definition - old syntax

const automobile = {
    start: function () {

    },
    stop: function () {

    }
}

// prototype method - new syntax

const automobile = {
    start() {

    },
    stop() {

    }
}

//////////////////////////////////////////////////////////////////////////////////////

class Automobile {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // method 1
    start() {
        console.log(`The ${this.make} ${this.model}'s engine started.`)
    }
    stop() {
        console.log(`The ${this.make} ${this.model}'s engine's stopped.`)
    }
}

// NEW INSTANCES
// Using the "new" keyword, we can use our class of Automobile as a blueprint to create a new object/instance of our Automobile class.

// new object/instance of Automobile class:

let hondaCivic = new Automobile('Honda', 'Civic');
console.log(hondaCivic);
console.log(hondaCivic.make);
console.log(hondaCivic.model);

// We can now use dot notation to access the methods that were inherited when we created the new instance of the class.
hondaCivic.start();
hondaCivic.stop();

// Another new object/instance of the Automobile class

let fordEscape = new Automobile('Ford', 'Escape');
console.log(fordEscape);
console.log(fordEscape.make);
console.log(fordEscape.model);

fordEscape.start();
fordEscape.stop();

/*
CONSTRUCTOR METHOD

    - What exactly is the constructor method doing?
        - The constructor method is a special method that helps us create and initialize an object created from a class
            - Works in tandem with the "new" keyword

    - The constructor method needs to be included for us to create new objects/instances of our class, so we can set properties, as well as pass in values for those properties when creating the new objects/instances

*/

// First, we name the class:
class Cookie {
    // Next, we call the constructor method and pass in parameters. These parameters will hold the values that we pass in when creating a new object based off of the class of "Cookie".
    constructor(type, icing, shape) {
        // on the right side of the expression, these are the parameters that accept the values from each new object we create. 
        this.t = type;
        this.i = icing;
        this.s = shape;
        // on the left side of the expression, we assign the keys for the values that we pass in when creating a new class.
    }
}

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
console.log(chocolateChip);
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);

// EXTENDS
// The "extends" keyword is used in either class declarations or class expressions to create a new class as a child of another class.

// Each new class we create that extends from the parent class not only inherets the properties and methods from the parent class, but it also can have it's own properties and methods as well.

// These are also refered to as a "subclass".

// PARENT 

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats their food.`)
    }
}

// SUBCLASS

class Dog extends Animal {
    constructor(name, breed) {
        // JS requires us to call the "super" method inside of the constructor method - before anything else - or we won't have access to the "this" keyword.
        super(name);
        this.type = breed;
    }

    play(){
        console.log(`${this.name} fetches the ball.`);
    }
}

let Juicy = new Dog('Juicy', 'Pitbull');
console.log(Juicy);
Juicy.eat();
Juicy.play();
