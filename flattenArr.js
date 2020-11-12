// Flatten a nested array. You must account for varying levels of nesting. steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]. steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
function steamrollArray(arr) {
    let newArray = [];
    for(let i=0; i<arr.length; i++){
      takeoffBracket(arr[i], newArray); // newArray sent for mutation.
    }
    return newArray;
  }
  
  function takeoffBracket(item, arr){
    if(!Array.isArray(item)){
      arr.push(item); // adding items to newArray.
    }
    else{
      for(let i=0; i<item.length; i++){
        takeoffBracket(item[i], arr);
      }
    }
  }
  
  console.log(steamrollArray([1, [], [3, [[4]]]]));