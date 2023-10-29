const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];

const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
    },
];

const developers = [
    {
        id: 1,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
    },
    {
        id: 2,
        fullName: 'Petr Petrov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
    },
    {
        id: 3,
        fullName: 'Ian Melnikov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
    },
    {
        id: 4,
        fullName: 'Antonio Banderas',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
    },
];

// const shortNames = names.filter(nam => nam.length < 5);
// const shortNames2 = names.filter(nam => nam.length > 5);

// console.log (shortNames);
// console.log (shortNames2);

// const cheapProducts = products.filter(product => product.price < 300);;
// const cheapProducts2 = products.filter(product => product.price > 300);;

// console.log (cheapProducts);
// console.log (cheapProducts2);


const tsDevelopers = developers.filter(devloper => devloper.skills.includes('TypeScript'));
const tsDevelopers2 = developers.filter(devloper => devloper.skills.includes('TypeScript')===false);
// const tsDevelopers2 = developers.filter(devloper => {
//    if (devloper.skills.includes('TypeScript')===false);
//    return ;
// });

console.log (tsDevelopers );
console.log (tsDevelopers2);