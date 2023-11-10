//1

function pow(num, degree) {
  if (degree == 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(pow(3, 3));

//2

function removeElement(array, item) {
  array.forEach((el, index) => {
    if (el == item) {
      delete array[index];
    }
  });
  return array;
}

let arr = [1, 2, 3, 4, 5];

console.log(removeElement(arr, 6));

//3
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

console.log(generateKey(16, characters));
