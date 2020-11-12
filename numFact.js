// Return the factorial of the provided integer.
// sol1.
// function factorialize(num) {
//     let f = 1;
//     while(num>=1){
//       f *= num;
//       num--;
//     }
//     return f;
//   }
//   console.log(factorialize(5));

  // sol2: Using recursive function algorithm.
  function factorialize(num) {
    // if(num == 0){
    //   return 1;
    // }
    // else{
    //   return num*factorialize(num-1);
    // }
    return (num === 0)? 1:num*factorialize(Math.abs(num)-1);
  }
  
  console.log(factorialize(-5));