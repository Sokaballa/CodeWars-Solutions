// Description:

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// My Solution

function findOdd(A) {
    let count = {}
    for (let num of A) {
      if (count[num] == true) {
        count[num] += 1
      } else {
        count[num] = 1
      }
    }
    for (let numCount in count) {
      if (count[numCount] % 2 == 1) {
          return Number(numCount)
      }
    }
}

// Solution in CodeWars to learn from. Again, use of ternary operator. Used forEach instead of for... of.
// Think I did okay with this one, but truncating is a building block.

function findOdd(A) {
    let obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

// Clever answer,