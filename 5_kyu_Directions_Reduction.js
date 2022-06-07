// PROBLEM

// Given an array of directions, being "NORTH", "SOUTH", "EAST", and "WEST",
// where opposite directions annihilate each other in the original array,
// determine the final set of directions to be taken.

// Example: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// would reduce down to ["WEST"] because:
//     - the first two values would annihilate,
//     - after the first pair of "EAST" and "WEST" annihilate, "NORTH" and
//     "SOUTH" would be next to each other in the array again, meaning another
//     annihilation
//     - the only thing left would now be "WEST"

// SOLUTION (Notes: Could have used just answerArray.pop() which does the same thing.)

function dirReduc(arr){
    let answerArray = []
    for (i = 1; i <= arr.length; i++) {

        //If directions are opposite, iterate an additional step.
        if (arr[i] == "NORTH" && arr[i - 1] == "SOUTH" || arr[i] == "SOUTH" && arr[i - 1] == "NORTH" || arr[i] == "EAST" && arr[i - 1] == "WEST" || arr[i] == "WEST" && arr[i - 1] == "EAST") {
            i++

        //If things that are being pushed to the answerArray are opposite of what is already there, we remove from the answerArray using pop().     } else if 
        } else if (answerArray[answerArray.length - 1] == "NORTH" && arr[i-1] == "SOUTH" || answerArray[answerArray.length - 1] == "SOUTH" && arr[i-1] == "NORTH" || answerArray[answerArray.length - 1] == "EAST" && arr[i-1] == "WEST" || answerArray[answerArray.length - 1] == "WEST" && arr[i-1] == "EAST") {
            answerArray.pop(answerArray[answerArray.length - 1])

        //If neither of those conditions are met, add the last element to answerArray.    
        } else {
            answerArray.push(arr[i - 1])
        }
        
    }
    return answerArray
}

// CLEVER SOLUTION - Makes use of object pairs and uses the reduce function.

function dirReduc(arr){
    var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
    return arr.reduce(function (a, b, i) {
      opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
      return a
    }, [])
}