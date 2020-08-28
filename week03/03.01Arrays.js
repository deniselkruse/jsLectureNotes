/*
************
 ARRAYS
************
    - Arrays are used to store multiple values in a single variable
        - there are array methods that allow us to traverse, as well as mutate, the data being held by an array
    - arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the arrays length -1
    MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let arr = ['the is the first element', 'this is the second element', 'this is the third element'];
console.log(arr[0]) // logs 'this is the first element'
console.log(arr[1]) // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the third element'
console.log(arr.length);
console.log(typeof arr);

// The Array() constructor is used to create Array objects

let test = new Array ();
console.log(test);

let testTwo = new Array(3); // let testTwo = [ , , ]
console.log(testTwo);
console.log(testTwo.length);

testTwo[1] = 'did it work?';
console.log(testTwo);

/*
It is important to note that if you use the array constructor to create an array, and pass in a number, you are cerating an array with an initial size. However, if you pass in more than one argument, you create an array that holds those values.
*/

let nums = Array(1, 2, 3, 4, 5); // JavaScript allows you to omit the new operator when using the array constructor.
console.log(nums);

let strings = new Array('this', 'is', 'a', 'test');
console.log(strings);

/*
************
 FOR EACH
************
    - the forEach() method runs a function once for each element in an array
        - the forEach() method is essentially another way to loop over information
    MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let boardGames = ['Monopoly', 'Clue', 'Risk', 'CandyLand', 'Catan', 'Sorry'];

for (let index =0; index < boardGames.length; index++){
    console.log(boardGames[index]);
}

// CONCISE BODY ANONYMOUS ARROW FUNCTION
boardGames.forEach(game => console.log(game));

// BLOCK BODY ANONYMOUS ARROW FUNCTION
boardGames.forEach(game => {
    console.log(game);
})

// TRADITIONAL ANONYMOUS FUNCTION
boardGames.forEach(function (game) {
    console.log(game);
})

/*
************
 METHODS
************
    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
*/

// To access a specific element in an array use bracket notation along with its index value.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList[0]); // returns celery

// Array.length → returns the number of elements in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.length); // returns 5

// Array.push() → adds element to the end of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.push("salt");
console.log(shoppingList);

// Array.pop() → removes the last element in the array and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() → adds a new element at the beginning of the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.unshift("salt");
console.log(shoppingList);

// Array.shift() → removes the first element in an array, and returns that element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.shift();
console.log(shoppingList);

// Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.map(item => item.toUpperCase()));

// Array.filter() → creates a new array with only the elements that pass the test in a given function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.filter(item => item.startsWith("l")));

console.log(shoppingList.filter(item => {
    return item.startsWith('g');
}))

let filter = shoppingList.filter(item => item.startsWith('o'));
console.log(filter);

// Array.find() → returns the first element in an array that passes a test given as a function.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.find(item => item.startsWith("l")));

// Array.reduce() → executes a given function for each value of the array and returns a single value.
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost));

console.log(costs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},10));

// Array.includes() → determines whether an array has a specific element.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.includes("limes"));
console.log(shoppingList.includes("salt"));

// Array.indexOf() → search the array for a specific element and returns its first index. Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]
console.log(shoppingList.indexOf("lemons"));
console.log(shoppingList.indexOf("salt"));

// Array.findIndex() → returns the index of the first element in an array that passes the test in a given function. Returns -1 when element is not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.findIndex(item => item.startsWith("g")));

// Array.every() → checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1));

// Array.concat() → merge two or more arrays, and returns a new array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherList = ["salt", "mint leaves", "olives"];
console.log(shoppingList.concat(anotherList));

// Array.slice() → selects a part of an array, and returns a new array. Selects the elements starting at the provided start argument, and ends at, but does not include, the provided end argument.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.slice(1, 3));

// Array.splice() → add/removes elements in an array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument takes in the new elements to be added to the array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2, 1);
console.log(shoppingList);

shoppingList.splice(2, 1, "cherries");
console.log(shoppingList);

// Array.sort() → sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default, sort() orders the values as strings in alphabetical and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
console.log(costs.sort((a, b) => b - a));
//want to sort by descending order

console.log(costs.sort((a, b) => a - b));
//want to sort by ascending order

//want to sort by ascending order
// Array.reverse() → reverses the order of the elements in an array.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());

// Array.toString() → converts an array into a string.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());

// Array.join() → converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicates how the elements will be separated. Default separator is a comma.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.join("! and "));

// Lastly, an ES6 feature: the spread operator. The spread operator, indicated by these 3 dots "…" expands the contents of the array and takes it out of the array structure.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(...shoppingList);