// PROBLEM

// Write a function that will find all the anagrams of a word from a list.
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams
// or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// SOLUTION

function anagrams(word, words) {
    let answer = []
    let sortedWord = word.split("").sort().join("")
    let sortedWordList = words.map((element) => element.split("").sort().join(""))
    for (i = 0; i < sortedWordList.length; i++) {
        if (sortedWord == sortedWordList[i]) {
            answer.push(words[i])
        }
    } return answer
} 

// Good CodeWars solution. Similar to mine, just more succinct. Uses filter.
let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
