// PROBLEM

// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Example:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION

function solution(str, ending){
    let strToCheck = ending === "" ? "" : str.slice(-ending.length)
    return strToCheck === ending ? true : false
}

// Note: There is a function that does this much easier, called endsWith(). For the future!