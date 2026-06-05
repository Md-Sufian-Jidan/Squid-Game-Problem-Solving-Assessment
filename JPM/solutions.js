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
    let count = 0;
    for (s of str.toLowerCase()) {
        if (s === char) {
            count++;
        }
    }
    return count;
};

// console.log(countChar('banana', 'a'))


const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
};

// console.log(sumArray([1, 2, 3, 4]))


const findMax = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// console.log(findMax([3, 4, 5, 6, 77, 77]));


// const removeDuplicates = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// };

// const removeDuplicates = (arr) => {
//     return [... new Set(arr)];
// };

const removeDuplicates = (arr) => {
    return arr.filter((ar, idx) => arr.indexOf(ar) === idx);
}

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

// const flattenArray = (arr) => {
//     return arr.flat(Infinity);
// };

const flattenArray = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
};

// console.log(flattenArray([1, [2, 3], [4, [5]]]));

const chunkArray = (arr, size) => {
    let chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
};

// console.log(chunkArray([1, 2, 3, 4, 5], 2));

const countProperties = (obj) => Object.keys(obj).length

// console.log(countProperties({a: 1, b: 2, c: 3}))

// const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});
const mergeObjects = (obj1, obj2) => Object.assign(obj1, obj2);

// console.log(mergeObjects({a:1}, {b:2} ));

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    };
};

// console.log(fizzBuzz(15));

const invertObject = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
};

// console.log(invertObject({a: 1, b: 2}));

const findDuplicateNames = (arr) => {
    return arr.map((ar) => console.log(arr))
};

console.log(findDuplicateNames([{ name: 'Ali' }, { name: 'Sara' }, { name: 'Ali' }]));