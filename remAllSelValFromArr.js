// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.
function destroyer(arr) {
    let i = 1; // index of 2nd argument.
    let delItems = [];
    while(i<arguments.length){
      delItems.push(arguments[i]);
      i++;
    } // Items that need to be deleted.
    let newArr = arguments[0].filter(
      num => !delItems.includes(num)
    ); // Items if not in delItems.
    return newArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));