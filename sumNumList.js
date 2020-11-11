// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all // the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
  // Avoid mutating original.
  let listNum = [...arr].sort(
    (a, b) => a-b
  ); // ascending sort.
  let i = listNum[0]+1; // starting from smallest.
  // Comparing with last item.
  while(i<listNum[listNum.length-1]){
    // inserting into second last position.
    listNum.splice(listNum.length-1, 0, i);
    i++;
  }
  // calculating sum of all nums in the list.
  let total = listNum.reduce(
    (sum, num) => (sum+num), 0
  )
  return total;
}

console.log(sumAll([10, 5]));