// PROBLEM

// Write a function, which takes a non-negative integer (seconds) as input and
// returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// SOLUTION

function humanReadable (seconds) {
    let secondsTime = ''
    if (seconds < 0 || seconds > 359999) {
        return null
    }
    // get hours
    let hours = Math.floor(seconds/3600)
    let updatedTime = seconds - (hours * 3600)
    if (hours < 10) {
        hours = `0${hours}`
    }
    

    //get minutes
    let minutes = Math.floor(updatedTime/60)
    let updatedTime2 = updatedTime - (minutes * 60)

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    //get seconds

    if (updatedTime2 < 10) {
        secondsTime = `0${updatedTime2}`
    } else secondsTime = updatedTime2

    //return time

    return `${hours}:${minutes}:${secondsTime}`

}