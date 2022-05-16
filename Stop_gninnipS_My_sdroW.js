// Description: 

// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

// Solution

function spinWords(string) {
    let split = string.split(" ")
    let reverseSplit = split.map(element => {
        if (element.length > 4) {
            return element.split("").reverse().join("")
        } else {
            return element
        }
        })
    return reverseSplit.join(" ")
};

// Cleanest Solution on CodeWars. Notice the combining of functions split and map combined with ternary operator

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

