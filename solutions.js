/**
 *  * The Problems
1. Reverse a String
Task: Write a function that takes a string and returns it reversed.

Input: string s
Output: string
Constraints: s.length <= 1000.
Edge Case: Single character strings or empty strings.
Hint: Look into built-in string slicing or a simple loop.
 */
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
reverseAString("Edge Case: Single character strings or empty strings.Hint: Look into built-in string slicing or a simple loop.");
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
/**
 * 3. Find the Largest Number in an Array
Task: Given an array of integers, return the largest value.

Input: int[] nums
Output: integer
Constraints: Array will have at least one element.
Edge Case: Array with all negative numbers.
Hint: Initialize a variable with the first element of the array.
 */
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
findLargeNumber([1, 2, 3, 4, 5, 6]);
/**
 * 4. Check for Palindrome
Task: Determine if a word reads the same forward and backward.

Input: string s
Output: boolean
Constraints: Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
Edge Case: "racecar" (true) vs "hello" (false).
Hint: Compare the string with its reverse.
 */
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
console.log(checkPalindrome("jidan"));
