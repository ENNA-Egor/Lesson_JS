const numbers= [1, 2, 3]

function mainCode(num) {
    // напишите код до оператора return
   
    return  num * 2;
}

const doubledNumbers = numbers.map(mainCode);

console.log (doubledNumbers);