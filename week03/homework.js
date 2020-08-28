
let favMovie = {
    nameOfMovie: 'Happy Gilmore',
    genre: 'Comedy',
    runTime: '93 minutes',
    characters: [
            {name: 'Happy Gilmore',
            age: 26,
            items: [
                {itemOne: 'Hockey Stick'},
                {itemTwo: 'Grandma'}
            ]
            },
            {name: 'Shooter McGavin',
            age: 36,
            items: [
                {itemOne: 'Gold Jacket'},
                {itemTwo: '9 Iron'}
            ]
            }
    ]
}


console.log(favMovie.nameOfMovie);
console.log(favMovie.runTime);

console.log(favMovie.characters);

console.log(favMovie.characters[0].name);
console.log(favMovie.characters[0].items[0].itemOne);

