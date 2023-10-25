const myArray = [1, 2, 3, 5, 7, 13, 27, 30, 55, 78];

function getLength(myArray, counter = 0) {
  console.log(myArray);
  if (myArray.pop() === undefined) {
    console.log(counter);
    return counter;
  } else {
    counter++;
    return getLength(myArray, counter);
  }
}

getLength(myArray);

// console.log(myArray.pop());
