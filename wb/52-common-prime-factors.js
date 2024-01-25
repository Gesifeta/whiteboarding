const commonPrimeFactor = (num1, num2) => {
    //to hold prime factors
    let commonPrimeFactors = [];
    //helper functon to check if a number is prime or not
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false
        }
        return true;
    }
    //
    for (let j = 0; j <= (num1 < num2 ? num1 : num2); j++) {
        if (num1 % j === 0 && num2 % j === 0) {
            if (isPrime(j)) commonPrimeFactors.push(j)
        }
    }
    return commonPrimeFactors;
}
console.log(commonPrimeFactor(12, 50));  // => [ 2 ]
console.log(commonPrimeFactor(6, 24));  // => [ 2, 3 ]
console.log(commonPrimeFactor(11, 22));  // => [ 11 ]
console.log(commonPrimeFactor(45, 60));  // => [ 3, 5 ]