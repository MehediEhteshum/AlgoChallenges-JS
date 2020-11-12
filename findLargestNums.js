// Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
    let lrgstNums = [];
    let i = 0;
    while(i<arr.length){
      let j = 0;
      let lrgstNum = arr[i][0]; // 1st num of sub-array.
      while(j<arr[i].length){
        lrgstNum = (arr[i][j]>lrgstNum)? arr[i][j]:lrgstNum;
        j++;
      }
      lrgstNums.push(lrgstNum);
      i++;
    }
    return lrgstNums;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
  