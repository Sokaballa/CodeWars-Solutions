// PROBLEM

// Find the smallest interger in the array.

// SOLUTION

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b) => a - b)[0]
    }
}