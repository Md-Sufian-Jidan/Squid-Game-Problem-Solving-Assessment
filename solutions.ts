function reverseAString(s: string): string {
    if (s === "") return "You cannot give a empty string";
    if (s.length === 1) return "You cannot provide a single character string";
    if (s.length <= 1000) {
        let reversedString: string[] = [];
        for (let i = 0; i <= s.length; i++) {
            reversedString.unshift(s[i]);
        }
        const result = reversedString.join("");
        return result;
    }
    return "Please give a 1000 character short string!!!";
};

/**
 * 2. FizzBuzz
Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

Input: integer n
Output: Printed lines or a list of strings.
Constraints: 1 <= n <= 100.
Edge Case: n = 1.
Hint: Use the modulo operator % to check for remainders.
 */

function fizzBuzz(n: number) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};

// fizzBuzz(10);

function findLargeNumber(numArr: number[]): number | string {
    if (numArr.length === 0) return "Please provide at least one number";
    let largeNumber = numArr[0];
    for (let num of numArr) {
        if (num > largeNumber) {
            largeNumber = num;
        }
    }
    return largeNumber;
};

function checkPalindrome(word: string): boolean {
    let reversedString: string[] = [];
    for (let i = 0; i <= word.length; i++) {
        reversedString.unshift(word[i]);
    }
    const result = reversedString.join("");
    if (word.toLocaleLowerCase() === result.toLocaleLowerCase()) return true;
    return false;
};

function sumOfArray(nums: number[]): number {
    if (nums.length === 0) return 0;
    let sum = 0;
    if (nums.length <= 500) {
        for (let num of nums) {
            sum = sum + num;
        }
    }
    return sum;
};

function countVowels(str: string): number {
    if (str.length === 0) return 0;
    let count = 0;
    const strArray = str.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
        if (strArray[i] === vowels[0] || strArray[i] === vowels[1] || strArray[i] === vowels[2] || strArray[i] === vowels[3] || strArray[i] === vowels[4]) {
            count++;
        }
    }
    return count;
};

function calculateFactorial(num: number): number {
    if (num === 0) return 1;
    let fact = 1;
    if (0 <= num) {
        if (num <= 12) {
            for (let i = 1; i <= num; i++) {
                fact = fact * i;
            }
        }
    }
    return fact;
};