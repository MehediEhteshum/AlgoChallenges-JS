// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
    let newArr = [...arr];
    let i = arr.length;
    for(let j=0; j<arr.length; j++){
      if(func(arr[j])){
        i = j; // first index for which func is true.
        break;
      }
    }
    return newArr.slice(i);
  }
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));