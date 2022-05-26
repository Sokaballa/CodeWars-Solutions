// PROBLEM

// Given an n x n array, return the array elements arranged from
// outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]


// SOLUTION

function snail(array) {
let finalArray = []
  while(array.length){
    finalArray.push(...array.shift())
    for (var i = 0; i < array.length; i++){
      finalArray.push(array[i].pop())
    }
    finalArray.push(...(array.pop() || []).reverse())
    for (i = array.length -1; i >= 0; i--){
      finalArray.push(array[i].shift())
    }
  }
  return finalArray
}

// Had a lot of help with this one and by the end of it,
// ended up copying nearly all of the solution.
// I had the idea right to remove parts of the original array
// so as to make it to where the original array is empty,
// using the while loop. But I got stuck with
// (...(array.pop() || []).reverse()).
// However, I now know that the spread syntax (...) is
// used to designate iterables that need to be
// taken in pieces. I also now realize that reverse
// will return undefined on an empty array, which
// ruined my original solution.But

// A clever solution that I liked was the one below
// which, while not the most elegant, was incredibly readible.
// This is how I started my original CodeWar attempt
// by failed to see it through.

// snail = function(array) {
//     var size = array.length;
    
//     if (size == 0)
//       return [];
  
//     if (size == 1)
//       return array[0];
    
//     var top    = array[0].slice(0, -1);
//     var right  = array.slice(0, -1).map(a => a[size - 1]);
//     var bottom = array[size -1].slice(1).reverse();
//     var left   = array.slice(1).map(a => a[0]).reverse();
//     var inner  = array.slice(1, -1).map(a => a.slice(1, -1));
  
//     return [].concat(top, right, bottom, left, snail(inner));
// }