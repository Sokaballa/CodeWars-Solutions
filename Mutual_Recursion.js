// Mutual Recursion
// You'll want to create two functions F and M such that the following equations are true:

// F(0) = 1
// M(0) = 0
// F(n) = n - M(F(n - 1))
// M(n) = n - F(M(n - 1))

function F(n) {
    if (n === 0) {
        return 1
    } else {
        return n - M(F(n - 1));
    }
}
  
function M(n) {
    if (n === 0) {
        return 0
    } else {
        return n - F(M(n - 1));
    }
}