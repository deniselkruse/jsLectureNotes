/*
************
  OBJECTS
************
    - The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.
    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName);

/*
    JSON OBJECTS
        - JSON stands for JavaScript Object Notation
        - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
        - JSON exists as a string — useful when you want to fetch data from a server. It needs to be converted to a native JavaScript object if you want to access the data.

        - show them what JSON data looks like in browser ---> https://rickandmortyapi.com/api/character/
        - https://jsonformatter.org/ --- > paste in text from above

        - we will talk more about JSON data when we start working with API's
*/

/*
************
OBJECT BRACKET NOTATION/PROPERTY ACCESSORS 
************
    - Property accessors provide access to an object's properties by using the dot notation or the bracket notation.
    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

let dog = {};

// setters
dog['name'] = 'luna';
dog['breed'] = 'Siberian Husky';
console.log(dog);

// all keys in objects are strings, even though they aren't wrapped in quotes
let test = Object.keys(dog);
console.log(test);
console.log(typeof test[0]);

// Using square brackets is necessary when you may not be able to use dot notation to dig through an object
let testObj = {
    "Spaces Here": true,
    noSpaces: true
};

console.log(testObj.noSpaces);
console.log(testObj["Spaces Here"]);


