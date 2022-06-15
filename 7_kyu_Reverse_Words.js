// Problem

// Complete the function that accepts a string parameter,
// and reverses each word in the String. All spaces in the String
// should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"

// Solution

function reverseWords(str) {
    let arr = str.split(' ')
    for (i = 0; i < arr.length; i++) {
     arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
}