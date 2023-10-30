const numbers= [1, 2, 3];

function mainCode(numbers) {
    // напишите код до оператора return
    const doubledNumbers = numbers.map(numbers => numbers * 2); 
    return doubledNumbers;
}
// console.log (doubledNumbers);
mainCode()

// function isLeapYear(year) {
//     // TODO
//         if (year % 400 === 0) {
//           return true;
//         } else if (year % 100 === 0) {
//           return false;
//         } else if (year % 4 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       }

//   console.log(isLeapYear(2100))
