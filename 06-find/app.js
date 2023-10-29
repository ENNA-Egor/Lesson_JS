const players = [
   {
       id: 1,
       name: 'Andres',
       surname: 'Iniesta',
       club: 'Vissel Cobe',
   },
   {
       id: 2,
       name: 'Eden',
       surname: 'Hazard',
       club: 'Real Madrid',
   },
   {
       id: 3,
       name: 'Mo',
       surname: 'Salah',
       club: 'Liverpool',
   },
   {
       id: 4,
       name: 'Lionel',
       surname: 'Messi',
       club: 'Barcelona',
   },
];

const messi = players.find(player => player.surname ==='Messi');
const salah = players.find(player => player.name ==='Mo');

console.log(messi);
console.log(salah);