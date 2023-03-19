// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Start by creating a function called checkBoil with a parameter of userTemp.
// Next, use a series of conditionals to first check if the input arguement is above boiling point, returning if it is.
// Then, we use an else if statement to do the same for at and below boiling point, and a final catch-all else for bad inputs.

const checkBoil = (userTemp) => {
    const boilingPoint = 212
    if(userTemp > boilingPoint) {
        return(`${userTemp} is above boiling point`)
    } else if(userTemp === boilingPoint) {
        return(`${userTemp} is at boiling point`)
    } else if(userTemp < boilingPoint) {
        return(`${userTemp} is below boiling point`)
    } else {
        return("This is not a valid input")
    }
}

const temperature1 = 42
// console.log(checkBoil(temperature1));
// Expected output: "42 is below boiling point"

const temperature2 = 350
// console.log(checkBoil(temperature2));
// Expected output: "350 is above boiling point"

const temperature3 = 212
// console.log(checkBoil(temperature3));
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// First, we will create a function that takes in two arrays as parameters, use concat to combine the two inputs together into a new array, and then use a length property to find the total length of the new array.

const arrayTotalLength = (array1, array2) => {
    newArray = array1.concat(array2)
    //console.log(newArray); Used to ensure new array was created correctly
    return(newArray.length)
}

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// console.log(arrayTotalLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// First, we will create a function reverseString that will take in a string as an arguement. Then, we will use split to turn the string into an array, reverse the array, then join the array back into a string, and return the result.

const reverseString = (userstring) => {
    userArray = userstring.split("")
    userArray.reverse()
    return(userArray.join(""))
}

const currentCohort = "Bravo 2023"
// console.log(reverseString(currentCohort));
// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// For this challenge, we will create a function that takes in an array and number as arguements, and uses the lastIndexOf accessor to find the last instance of the given value and return its index in the given array.

const getLastIndex = (userArray, userNum) => {
    return(userArray.lastIndexOf(userNum))
}

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// console.log(getLastIndex(myNumbers, givenValue1));
// Expected output: 7

const givenValue2 = 10
// console.log(getLastIndex(myNumbers, givenValue2));
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// For this challenge, we will create a function that will take in an array as an arguement, sort that array with .sort(), which will sort it from lowest to highest, and then reverse the array to have it sort instead from largest to smallest and return that result.

const sortArray = (userArray) => {
    return(userArray.sort().reverse())
}

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// console.log(sortArray(sanDiegoSummerTemperatures));
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// console.log(sortArray(sanDiegoWinterTemperatures));
// Expected output: [68, 67, 66, 66, 62, 59, 59]
