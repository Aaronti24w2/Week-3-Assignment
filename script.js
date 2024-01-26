// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

const checkY = (testString) => { 
    //If the test string includes the character "y", console log yes, otherwise console log no. 
    if (testString.includes ('y')){
        console.log("Yes")
    } else {
        console.log("No")
    }
}

checkY("Crazzy")
checkY("Hello World")

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// function getFactorial(num) {
// logic
// return the value;
// }

function factorialCalc(num) {
    if (num < 0) {
//Undefined Factorials for negatives.
        return "Undefined"
    }
    
    //first part of any factorial is 1.
    let factorialResult = 1
    //Multiplies factorial result times the next number
    for (let i = 1; i <=num; i++) {
        factorialResult = factorialResult * i
    }
    return factorialResult
}

console.log (factorialCalc(5))

//3. You have an array of students
 let studentList = [
{ name: "Mike", marks: [80, 50, 60, 100] },
{ name: "Daniel", marks: [40, 50, 100, 100] },
{ name: "Stacy", marks: [20, 100, 50, 70], }];

function getHighestAverageStudent() {
    // returns the student name with highest average marks
    const studentWithHighestAverage = studentList.reduce ((highest, current) => {
        const markAverage = current.marks.reduce((sum, mark) => sum + mark, 0)/current.marks.length;
        // If the new average mark is higher than the current highest average, the new average mark becomes the highest average
        if (markAverage > highest.average) {
            return {name: current.name, average: markAverage}
        } else {
            return highest;
        }
    }, {name: '', average:-1});
    return studentWithHighestAverage.name
} console.log(getHighestAverageStudent())

//4. HARD Question - You have to write a function that has the highest number of occurrences
const numbersArray = [ 20, 4, -10, 4, 11, 20, 4, 2]; // answer should be 4
function findFrequentNumber(arr){
    const numOccur = arr.reduce((countMap, num) => {
        //new count of num in countMap is either the old number + 1 or 0 + 1 if no valid number exsits, tracks occurances of numbers in array
        countMap[num] = (countMap[num] || 0) + 1
        return countMap
    }, {})

    const frequentNumber = Object.entries(numOccur).reduce((frequentNumber, [num, count])=> {
        if (count > frequentNumber.count) {
            //Update most frequent number to current number if current number has more occurances.
            return {number: parseInt(num), count}
        } else {
            return frequentNumber
        }
    }, {number: null, count: 0 })
    
    return frequentNumber.number
}

console.log (findFrequentNumber (numbersArray))


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
uniqueArray = [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueNumber(arr){
    //tracks how many occurances there are of the numbers in the array
    const uniqueOccur= arr.reduce((countMap, num) => {
        countMap[num] = (countMap[num] || 0) + 1
        return countMap
    }, {})
    //first number with only 1 occurance is marked as uniqueNum
    const uniqueNum = arr.find((num) => uniqueOccur[num] === 1)
    return uniqueNum
}

console.log(findUniqueNumber(uniqueArray))

//6. You have an array of palindromes and not palindromes,  and you have to return only palindromes array

stringArray = ['abc', 'aba', 'ccc', 'dca', 'a'] // expected answer ['aba', 'ccc', 'a']

//checks to see if the reversed string is identical to the orignal string, stores identical strings as palindromes
function isPalindrome(str){
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
}

//filters out any non palindrome from the array.
function onlyPalindromes(arr){
    return arr.filter((str) => isPalindrome(str))
}

console.log(onlyPalindromes(stringArray))