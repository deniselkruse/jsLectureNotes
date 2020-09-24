/*
ARRAY/OBJECT DESTRUCTURING 

    - Array destructuring allows you to unpack values from arrays, or even properties from objects, into distinct variables.
        - Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the souced variable (array/object).

        - Great for pulling information out of an array/object and assigning that data to it's own variable.

*/

const fullName = ['Denise', 'Kruse'];

const firstName = fullName[0];
const lastName = fullName[1];

// console.log(firstName, lastName);

const [firstName, lastName] = fullName; // = ['Denise', 'Kruse'];
console.log(firstName, lastName);

/* REST OPERATOR or REST SYNTAX

    -   The rest syntax looks exactly like the spread syntax
            - In a way, rest syntax is the exact opposite of spread syntax. Spread syntax "expands" an array into a list of standalone elements, while the rest syntax collects multiple elements and "condenses" them into a single element.

*/

const fullName = ['Denise', 'Kruse', 'Ms.', { month: 05, day: 24, year: 1983 }, 'testOne', 2, 'test3', '4', true, false];

const [firstName, lastName, ...otherInfo] = fullName;

console.log(firstName);
console.log(lastName);
console.log(otherInfo);

const fullName = ['Denise', 'Kruse', 'Ms.', { month: 05, day: 24, year: 1983 }, 'testOne', 2, 'test3', '4', true, false];

const [firstName, lastName, , , ...testData] = fullName;
console.log(firstName);
console.log(lastName);
console.log(testData);

// The rest operator MUST be the last element defined when using destructuring.

// OBJECT DESTRUCTURING

const user = {
    username: 'testuser',
    is_verified: true
};

const { username, is_verified } = user;

console.log(username);
console.log(is_verified);

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // renamed
    translations: [
        {
            title: localeTitle // renamed
        }
    ]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);

const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (const { name: n, family: {father: f} } of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}