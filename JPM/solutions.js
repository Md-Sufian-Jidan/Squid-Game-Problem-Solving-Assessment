const swapVariables = (a, b) => {
    return [b,a]
};

// console.log(swapVariables(1, 2))

const checkOddOrEven = (num) => {
    if (num % 2 === 0 ) {
        return "Even"
    } else if (num % 2 === 1 || num % 2 === -1) {
        return "Odd"
    } else {
        return "Invalid input"
    }
};

// console.log(checkOddOrEven(-6));

const findLargestNumber = (a, b, c) => {
  if (a >= b && a >= c) {
    return `Largest number is ${a}`;
  } else if (b >= a && b >= c) {
    return `Largest number is ${b}`;
  } else {
    return `Largest number is ${c}`;
  }
};

// console.log(findLargestNumber(5, 5, 3));

const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

// console.log(toFahrenheit(33));

const checkSign = (n) => {
    if (n === 0) {
        return "Zero";
    } else if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return 'Negative';
    } else {
        return "Invalid Input"
    }
};

// console.log(checkSign(-1))