const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];


// alert(registeredUsers[0][1]);

const form = document.querySelector('form');
const login = document.querySelector('input[name=login]');
const password = document.querySelector('input[name=password]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    validate();
};

function validate (){
    //  registeredUsers.forEach(element => {            
    //         if(
    //             element[0].includes(login.value.trim())  //&&
    //             // element[1].includes(password.value.trim())
    //             ){
    //                 alert ('Ok'); 
    //                return
    //             } else{
    //                  alert ('No');                  
    //                 }
    // })
    for(i=0; i< registeredUsers.length; i++){
        alert(registeredUsers[i]);
        if(
            // registeredUsers[i][0].includes(login.value.trim())  &&

            registeredUsers[i].includes(password.value.trim())
            ){
              alert ('Ok'); 
            //   return
             } else{
                     alert ('No'); 
                    //  return                 
                }
            }
    };


