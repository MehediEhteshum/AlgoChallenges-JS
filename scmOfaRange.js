// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order.
function checkPrime(num, primeList){
    let base = [2, 3, 5, 7]; // basic primes.
    if(base.includes(num)){
      return true;
    }
    else if(base.some(a => num%a===0)){
      // if num is divisible by any base primes.
      return false;
    }
    else if(parseInt(Math.sqrt(num))===Math.sqrt(num)){
      // if sqrt of num is int.
      return false;
    }
    else if(parseInt(Math.sqrt(num))!==Math.sqrt(num)){
      // if num is divisible by any prime smaller than its sqrt.
      let intSqrt = parseInt(Math.sqrt(num));
      let primes = [...primeList]; // no mutation of original
      primes.push(intSqrt); // inserting sqrt into primes.
      primes.sort((a, b) => a-b); // sorting primes (ascending).
      primes = primes.slice(0, primes.indexOf(intSqrt)+1); // deleting primes greater than sqrt.
      if(primes.some(a => num%a===0)){
        // if num is divisible by any prime smaller than its sqrt.
        return false;
      }
    }
    return true;
  }
  
  function genPrime(num){
    let primes = [];
    for(let i=2; i<=num; i++){
      if(checkPrime(i, primes)){
        // if i is prime.
        primes.push(i);
      }
    }
    return primes;
  }
  
  function smallestCommons(arr) {
    // input arr sorted. newArr created with that range.
    let temp = [...arr].sort((a, b) => a-b); // no mutation of orginal, sorting arr in ascending order.
    let a = temp[0]; let b = temp[1];
    let newArr = [...Array(b+1).keys()]; // new array upto upper limit of arr with step 1.
    newArr = newArr.slice(newArr.indexOf(a)); // new array: deleting items smaller than lower limit of arr.
    // prime numbers list upto range limit.
    let primes = genPrime(newArr[newArr.length-1]); // all primes upto upper limit of arr.
    let divCount = Array(primes.length).fill(0); // divCount list init with equal num of 0s to primes.length.
    for(let i=0; i<primes.length; i++){
      let p = primes[i];
      let counts = []; // init: list of num of divisions by a prime.
      for(let j=newArr.length-1; j>=0; j--){
        // starting from end of newArr.
        let num = newArr[j];
        let count = 0; // init: how many times a num can be divided by a prime.
        while(num%p===0){
          // counting num of divisions.
          num = num/p;
          count++;
        }
        counts.push(count); // keeping track of divisions count by a prime.
        newArr.splice(j, 1, num); // replacing num after all divisions.
        if(j==0){
          // if last iteration of newArr.
          divCount.splice(i, 1, Math.max(...counts)); // replacing count in divCount with max div counts of a prime.
        }
      }
    }
    let scm = divCount.reduce((acc, curr, i) => acc*Math.pow(primes[i], curr), 1); // smallest common multiple: multiplication of (prime^its max div count).
    return scm;
  }
  
  let orgArr = [110, 114]
  console.log(orgArr);
  console.log(smallestCommons(orgArr));
  