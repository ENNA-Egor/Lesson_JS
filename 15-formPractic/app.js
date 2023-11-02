const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
    ['egorN', 'Ghbdtn'],
];


const form = document.querySelector('form');
const login = document.querySelector('input[name=login]');
const password = document.querySelector('input[name=password]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    validate();
};

function validate() {
    if (!login.value && !password.value) {
        console.log('All fields are required');
        alert('All fields are required');
        return;
    } else if (!checkPass()) {
        console.log('Incorrect login or password');
        alert('Incorrect login or password');
    } else {
        console.log('Access granted');
        alert('Access granted');
        form.reset();
        insertObj ()
    }

};

function checkPass() {
    for (let user of registeredUsers) {
        if (
            user[0] === login.value.trim() &&
            user[1] === password.value.trim()) {
            alert('Ok');
            return true
        }
    }
};


function insertObj(){
    const btn = document.createElement('button');
    btn.textContent= 'click Me';
    btn.className = 'button_1';
    btn.style.backgroundColor = 'orange';
    btn.style.color = 'red';
    btn.style.border = '2px solid green';
    btn.style.borderRadius = '5px';
    btn.style.margin = '5px';
    btn.style.display = 'block';

    form.before(btn);
}

