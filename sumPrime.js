// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not // prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
function checkPrime(num, primesList){
    let base = [2, 3, 5, 7];
    if(base.includes(num)){
      return true;
    }
    else if((num%2===0) | (num%3===0) | (num%5===0) | (num%7===0)){
      return false;
    }
    else if(parseInt(Math.sqrt(num))===Math.sqrt(num)){
      return false;
    }
    else if(parseInt(Math.sqrt(num))!==Math.sqrt(num)){
      let intSqrt = parseInt(Math.sqrt(num));
      let newPrimes = [...primesList];
      newPrimes.push(intSqrt);
      newPrimes.sort((a, b) => (a-b));
      newPrimes = newPrimes.slice(0, newPrimes.indexOf(intSqrt)+1);
      for(let i=0; i<newPrimes.length; i++){
        if((num%newPrimes[i])===0){
          return false;
        }
      }
    }
    return true;
  }
  
  function sumPrimes(num) {
    let sum = 0;
    let primes = [];
    if(num>=2){
      let i = 0;
      while(i<=num){
        if(checkPrime(i, primes)){
          primes.push(i);
          sum += i;
        }
        i++;
      };
      return sum;
    }
    return "No prime numbers";
  }
  
  console.log(sumPrimes(977));