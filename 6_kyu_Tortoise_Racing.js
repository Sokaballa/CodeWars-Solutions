// PROBLEM

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead
// but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours,
// minutes and seconds (round down to the nearest second) or a string in some languages.

// SOLUTION

// Logic
// t = (distance ahead) / (rate2 - rate1) , if rate2 < rate1 answer is nil

function race(v1, v2, g) {
    let timeToCatch = g / (v2-v1) * 3600

    let hours = Math.floor(timeToCatch/3600)
    let updatedTime = timeToCatch - hours * 3600

    let minutes = Math.floor(updatedTime/60)
    let updatedTime2 = updatedTime - minutes * 60

    let seconds = Math.floor(updatedTime2)
    let answer = [hours, minutes, seconds]

    return v2 > v1 ? answer : null
}