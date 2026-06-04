const swapVariables = (a, b) => {
    return [b, a]
};

// console.log(swapVariables(1, 2))

const checkOddOrEven = (num) => {
    if (num % 2 === 0) {
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

// const reverseString = (str) => {
//     let reverse = [];
//     for (s of str) {
//         reverse.unshift(s);
//     };
//     return reverse.join("");
// };
const reverseString = (str) => [...str].reverse().join("");

// console.log(reverseString("Hello"));

const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            count++;
        }
    }
    return count;
};

// const countVowels = (str) => {
//   const vowels = 'aeiouAEIOU';
//   return [...str].filter(char => vowels.includes(char)).length;
// };

// console.log(countVowels("Hello"));

const isPalindrome = (str) => {
    if (str.toLowerCase() === [...str].reverse().join("").toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("racecar"));

const titleCase = (str) => {
    return str.split(" ").map((s) => s[0].toUpperCase() + s.slice(1, s.length)).join(" ");
};

// console.log(titleCase("hello world"));

const countChar = (str, char) => {
    let count= 0;
    for (s of str.toLowerCase()) {
        if (s === char) {
            count++;
        }
    }
    return count;
};

// console.log(countChar('banana', 'a'))


