function reverseAString(s: string): string {
    if (s === "") return "You cannot give a empty string";
    if (s.length === 1) return "You cannot provide a single character string";
    if (s.length <= 1000) {
        let reversedString: string[] = [];
        for (let i = 0; i < s.length; i++) {
            reversedString.unshift(s[i]);
        }
        const result = reversedString.join("");
        return result;
    }
    return "Please give a 1000 character short string!!!";
};

function fizzBuzz(n: number) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

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
    for (let i = 0; i < word.length; i++) {
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
    const strArray = str.toLocaleLowerCase().split("");
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

function evenOrOdd(nums: number[]): number[] {
    const evenNumber: number[] = [];
    if (nums.length <= 100) {
        for (let num of nums) {
            if (num % 2 === 0) {
                evenNumber.push(num);
            }
        }
    }
    return evenNumber;
};

function generateFibonacci(n: number): number[] {
    if (n === 1) return [0]
    let sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence;
};

function findMin(numArr: number[]): number | string {
    if (numArr.length === 0) return "Please provide at least one number";
    let minNumber = numArr[0];
    for (let num of numArr) {
        if (num > minNumber) {
            minNumber = minNumber;
        } else {
            minNumber = num;
        }
    }
    return minNumber;
};

function multiplicationTable(n: number) {
    const string = [];
    if (1 <= n) {
        if (n <= 100) {
            for (let i = 1; i <= 10; i++) {
                string.push(`${n} * ${i} = ${n * i}`);
            }
        }
    }
    return string.join("\n");
};

function checkPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    if (1 <= num) {
        if (num <= 1000) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
        }
    }
    return true;
};

// function removeDuplicate(nums: number[]):number[] {
//     return [...new Set(nums)]
// }

// function removeDuplicate(nums: number[]): number[]{
//     return nums.filter((item, index) => nums.indexOf(item) === index);
// }

function removeDuplicate(nums: number[]): number[] {
    const result: number[] = []
    for (let num of nums) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    return result;
};

function celsiusToFahhrenheit(celsius: number) {
    return (celsius * 9 / 5) + 32
};

function countOccurrences(str: string, char: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};
