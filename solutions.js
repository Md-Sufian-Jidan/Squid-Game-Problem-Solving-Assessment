function reverseAString(s) {
    if (s === "")
        return "You cannot give a empty string";
    if (s.length === 1)
        return "You cannot provide a single character string";
    if (s.length <= 1000) {
        var reversedString = [];
        for (var i = 0; i < s.length; i++) {
            reversedString.unshift(s[i]);
        }
        var result = reversedString.join("");
        return result;
    }
    return "Please give a 1000 character short string!!!";
}
;
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
function findLargeNumber(numArr) {
    if (numArr.length === 0)
        return "Please provide at least one number";
    var largeNumber = numArr[0];
    for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
        var num = numArr_1[_i];
        if (num > largeNumber) {
            largeNumber = num;
        }
    }
    return largeNumber;
}
;
function checkPalindrome(word) {
    var reversedString = [];
    for (var i = 0; i < word.length; i++) {
        reversedString.unshift(word[i]);
    }
    var result = reversedString.join("");
    if (word.toLocaleLowerCase() === result.toLocaleLowerCase())
        return true;
    return false;
}
;
function sumOfArray(nums) {
    if (nums.length === 0)
        return 0;
    var sum = 0;
    if (nums.length <= 500) {
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var num = nums_1[_i];
            sum = sum + num;
        }
    }
    return sum;
}
;
function countVowels(str) {
    if (str.length === 0)
        return 0;
    var count = 0;
    var strArray = str.toLocaleLowerCase().split("");
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        if (strArray[i] === vowels[0] || strArray[i] === vowels[1] || strArray[i] === vowels[2] || strArray[i] === vowels[3] || strArray[i] === vowels[4]) {
            count++;
        }
    }
    return count;
}
;
function calculateFactorial(num) {
    if (num === 0)
        return 1;
    var fact = 1;
    if (0 <= num) {
        if (num <= 12) {
            for (var i = 1; i <= num; i++) {
                fact = fact * i;
            }
        }
    }
    return fact;
}
;
function evenOrOdd(nums) {
    var evenNumber = [];
    if (nums.length <= 100) {
        for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
            var num = nums_2[_i];
            if (num % 2 === 0) {
                evenNumber.push(num);
            }
        }
    }
    return evenNumber;
}
;
function generateFibonacci(n) {
    if (n === 1)
        return [0];
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
;
function findMin(numArr) {
    if (numArr.length === 0)
        return "Please provide at least one number";
    var minNumber = numArr[0];
    for (var _i = 0, numArr_2 = numArr; _i < numArr_2.length; _i++) {
        var num = numArr_2[_i];
        if (num > minNumber) {
            minNumber = minNumber;
        }
        else {
            minNumber = num;
        }
    }
    return minNumber;
}
;
function multiplicationTable(n) {
    var string = [];
    if (1 <= n) {
        if (n <= 100) {
            for (var i = 1; i <= 10; i++) {
                string.push("".concat(n, " * ").concat(i, " = ").concat(n * i));
            }
        }
    }
    return string.join("\n");
}
;
function checkPrimeNumber(num) {
    if (num <= 1)
        return false;
    if (1 <= num) {
        if (num <= 1000) {
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
        }
    }
    return true;
}
;
// function removeDuplicate(nums: number[]):number[] {
//     return [...new Set(nums)]
// }
// function removeDuplicate(nums: number[]): number[]{
//     return nums.filter((item, index) => nums.indexOf(item) === index);
// }

function removeDuplicate(nums) {
    var result = [];
    for (var _i = 0, nums_3 = nums; _i < nums_3.length; _i++) {
        var num = nums_3[_i];
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
;
function celsiusToFahhrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function countOccurrences(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
;
