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



// function validatePIN (pin) {
    
//    if(/^\d+$/.test(pin)){
//     if((pin.length ===4 || pin.length ===6)){
       
//         return true
//         } else{
       
//         return false
//         }
//    }
    
//     return false
//   }



//   validatePIN ("12e569");
//   console.log(validatePIN ("1234"));
//   console.log(validatePIN ("12345"));
//   console.log(validatePIN ("123"));
//   console.log(validatePIN ("12.34"));
//   console.log(validatePIN ("-1234"));


function isTriangle(a,b,c){
    const arr = [a, b, c];
    console.log (arr);
    arr.sort(function (a, b) {
        return b - a;
      });
    console.log (arr);c
    if(arr[0]< (arr[1]+arr[2])){
        console.log (true);
        return true
    } else{
        console.log (false);
          return false; 
    }
}


// isTriangle(4,4,7)
isTriangle(6,2,7)