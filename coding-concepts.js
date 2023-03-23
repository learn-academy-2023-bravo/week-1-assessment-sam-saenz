// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: I think that this will log the number 10
// b) Verify and explain: I was right, because .length returns the total amount of characters in the string, including spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: I think that this will log 'o'
// b) Verify and explain: I was correct, because while o is the fifth character in the string, it is at index 4 because Javascript uses a 0 index for strings.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: I think that this will log "Ruby" 
// b) Verify and explain: I was right because just like strings, arrays have a 0 index, which means "Ruby" is at index 1, which is passed in by the const index

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I think that this will log an array with SATURDAY and SUNDAY as the first and second entries
// b) Verify and explain: I was wrong because after a search, I learned that toUpperCase only works on strings and not an array itself, so each individual index of the array would need to be passed the toUpperCase method to get the output I thought.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: I think that this will return number as the data type
// b) Verify and explain: I was correct because dataTypes.length returns the length of the array as a number, and typeof then checks the data type of that returned value.
