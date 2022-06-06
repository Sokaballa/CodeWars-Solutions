// PROBLEM

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains
// only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// SOLUTION

function isIsogram(str){
    let sortedString = str.toLowerCase().split('')
    let result = sortedString.filter((element, index) => sortedString.indexOf(element) !== index)
    return result.length == 0 ? true : false
}