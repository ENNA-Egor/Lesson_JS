const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const form = document.querySelector('form');
const login = document.querySelector('input[name=login]');
const password = document.querySelector('input[name=password]');

console.log (login.name);
console.log (password.name);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    validate();
    console.log ('submit');
};

function validate (){
    alert (login.value, password.value)
    if((login.value === 'admin') && (password.value ==='KoI18')){
        alert ('Ok');
    } else{
        alert ('No');
    }
};


