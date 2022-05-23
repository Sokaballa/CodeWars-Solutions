// Write a function that will return the count of distinct case-insensitive alphabetic
// characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase)
// and numeric digits.

function duplicateCount(text) {
    let obj = {}
    let ans = 0
    let arr = text.toLowerCase().split("")
    console.log(arr)
    for (let letter of arr) {
        if (obj[letter] == true) {
            obj[letter] += 1
        } else {
            obj[letter] = 1
        }
    }
    console.log(obj)
    for (let letterCount in obj) {
        if (obj[letterCount] > 1) {
            ans += 1
        }
    }
    return ans 
}