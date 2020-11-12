// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
    let i = 0;
    let fibList = [];
    while(i<=num){
      if(i===0){
        i = 1;
        fibList.push(i);
      }
      fibList.push(i);
      i = fibList[fibList.length-1]+fibList[fibList.length-2]; // sum of last 2 nums.
    }
    let sum = 0;
    if(fibList !== null){
      for(let i=0; i<fibList.length; i++){
        if(fibList[i]%2===1){
          sum += fibList[i];
        }
      }
    }
    if(num<=0){
      return 0;
    }
    return sum;
  }
  
  console.log(sumFibs(10));