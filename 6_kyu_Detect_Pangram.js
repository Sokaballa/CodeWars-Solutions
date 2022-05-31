// PROBLEM

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

// SOLUTION

function isPangram(string) {
    let compare = 'abcdefghijklmnopqrstuvwxyz'
    let emptyArray = []
    let stringArray = string.toLowerCase().split("")
    stringArray.forEach(element => {
        if (element == " " || element == "?" || element == "!" || element == "." || element == "," || isNaN(element) == false) {
            return
        } else if (!emptyArray.includes(element)) {
            emptyArray.push(element)
        } else return
    })
    let answerArray = emptyArray.sort().join("").toString()
    if (answerArray === compare) {
        return true
    } else return false
}

// Learning moment: The every() method tests whether all element in the array
// pass the test implemented by the provided function, returning a Boolean value.
// It executes a function for each array element an a function is passed
// as an argument, so something like string.every(function).

// Here's a better solution and a learning moment from it.

function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// Here's the above explanation step-by-step

// The indexOf() method returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
// indexOf checks every letter one by one to see if they exist in string.
// If not it returns -1, which returns -1 !== -1, which is false,
// so .every() doesn't return true for every element in an array,
// so it returns a total of false. If letter exists, indexOf() returns a
// non-negative index number, which is naturally !== -1, so .every() returns true.
// .every() goes through all letters of the alphabet this way
// and if every single return is true, .every() returns true 