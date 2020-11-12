// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
    let  i = 0;
    let seenList = [];
    while(i<arguments.length){
      let j = 0;
      while(j<arguments[i].length){
        if(!(arguments[i][j] in seenList)){
          seenList.push(arguments[i][j]);
        }
        j++;
      }
      i++;
    }
    return seenList;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  