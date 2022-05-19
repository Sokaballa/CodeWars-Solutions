function solution(number){
    if (number < 0) {
      return 0
    } else {
      let arr = []
      for (i = 1; i < number; i++) {
        if (i % 15 == 0) {
          arr.push(i)
        } else if (i % 3 == 0) {
            arr.push(i)
        } else if (i % 5 == 0) {
            arr.push(i)
        } else {} 
      }
      let answer = arr.reduce((sum,current) => sum + current, 0)
      return answer
    }
  }