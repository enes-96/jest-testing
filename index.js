function capitalize(arg) {
  return arg.charAt(0).toUpperCase() + arg.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(message, shift) {
  message = message.toUpperCase();

  let encrypted = "";

  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    encrypted += String.fromCharCode(charCode);
  }
  console.log(encrypted);
  return encrypted;
}
//sort the array select the first,middle,last
function analyzeArray(arr) {
  const smallest = Math.min.apply(null, arr);
  const largest = Math.max.apply(null, arr);
  const length = arr.length;
  const average = arr.reduce((sum, num) => sum + num);
  return {
    min: smallest,
    max: largest,
    arrLength: length,
    avr: average / length,
  };
}
const myObj = analyzeArray([1, 2, 3, 4, 5]);
console.log(myObj);
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
