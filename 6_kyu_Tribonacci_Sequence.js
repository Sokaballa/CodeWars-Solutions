// PROBLEM

// Make a Fibonacci Sequence for three numbers rather than two in an array and return the array.
// For n == 0, return an empty array.

// SOLUTION

function tribonacci(signature,n){
    if (n == 0) {
        return []
    } else if (n == 1) {
        return [signature[0]]
    } else {
        let array = signature
        for (i = 0; i < n - 3; i++) {
            array.push(array[i] + array[i + 1] + array[i + 2])
        }
        return array
    }
}

// Best Solution: Essentially does what I did in fewer steps, adding elements
// to signature and instead slicing the signature to return an array. This
// essentially gets rid of the if/else statements that I had to use.
function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n