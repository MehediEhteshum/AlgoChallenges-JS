// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Note You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
    var newArr = [
      ...arr1.filter(
        num => !arr2.includes(num)
      ), ...arr2.filter(
        num => !arr1.includes(num)
      )
    ].sort(
      (a, b) => a-b
    );
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));