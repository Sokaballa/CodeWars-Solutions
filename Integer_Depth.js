// The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.
// Write a function named computeDepth which computes the depth of its integer argument.
// Only positive numbers greater than zero will be passed as an input.

// The way I improved on it.

function computeDepth(x) {
    let pushedDigitArray = []
    let i = 1
    while (pushedDigitArray.length < 10) {
        let answer = x * i
        let answerArray = answer.toString().split("")
        let numberAnswerArray = answerArray.map(num => Number(num))
        numberAnswerArray.forEach(element => {
            if (!pushedDigitArray.includes(element)) {
                pushedDigitArray.push(element)
            }
        })
        i++
    }
    return i - 1
}


// The way I did it the first time. The long way.        
        
function computeDepth(x) {
    let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let pushedDigitArray = []
    let i = 1
    while (areArraysEqual(numberArray, pushedDigitArray) === false) {
        let answer = x * i
        let answerArray = answer.toString().split("")
        let numberAnswerArray = answerArray.map(num => Number(num))
        numberAnswerArray.forEach(element => {
            if (!pushedDigitArray.includes(element)) {
                pushedDigitArray.push(element)
            }
        })
        pushedDigitArray.sort(function(a,b){return a - b})
        i++
    }
    return i - 1
}

function areArraysEqual(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => value === b[index])
}