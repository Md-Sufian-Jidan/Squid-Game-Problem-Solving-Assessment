function reverseAString(s) {
    if (s === "")
        return "You cannot give a empty string";
    if (s.length === 1)
        return "You cannot provide a single character string";
    if (s.length <= 1000) {
        var reversedString = [];
        for (var i = 0; i <= s.length; i++) {
            reversedString.unshift(s[i]);
        }
        var result = reversedString.join("");
        return result;
    }
    return "Please give a 1000 character short string!!!";
}
;
/**
 * 2. FizzBuzz
Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

Input: integer n
Output: Printed lines or a list of strings.
Constraints: 1 <= n <= 100.
Edge Case: n = 1.
Hint: Use the modulo operator % to check for remainders.
 */
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
;
// fizzBuzz(10);
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
    for (var i = 0; i <= word.length; i++) {
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
    var strArray = str.split("");
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
