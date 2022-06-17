// PROBLEM

// You are given an array(list) strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k
// consecutive strings taken in the array.

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// SOLUTION

function longestConsec(strarr, k) {
    let baseString = ''
    let highestString = strarr.slice(0, k).
    if (k > strarr.length) {
        return baseString
    } else if (k < 0) {
        return baseString
    } else if (strarr.length = k) {
        return highestString
    } else {
        for (i = 0; i < strarr.length; i++) {
            if (strarr.length = 0) {
                return baseString
            } else {
                if (strarr.slice(i, (k + i)).length > highestString.length) {
                    highestString = strarr.slice(i, (k + i))
                }
            }    
        }
        if (highestString != null) {
            return highestString
        }
    }
}

function helloTree(strarr,k) {
    console.log(strarr)
    console.log(strarr.length)
    let highestString = strarr.slice(0,k)
    let highestStringJoin = highestString.join("")
    console.log(highestString)
    console.log(highestStringJoin)
        for (i = 0; i < strarr.length; i++) {
            if (strarr.slice(i, (k + i)).join("").length > highestString.length) {
                highestString = strarr.slice(i, (k + i)).join("")
                console.log(highestString)
            }
        }    
}
