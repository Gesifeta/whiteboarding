// helper function to check of the number is prime or not
function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true;
}
let nextTwoPrimes = (num) => {
    let count = 1, primes = [];
    let index = num + 1;
    while (count <= 2) {
        if (isPrime(index)) {
            count++;
            primes.push(index)
        }
        index++
    }
    return primes;
}
(nextTwoPrimes(2));  // => [ 3, 5 ]
(nextTwoPrimes(3));  // => [ 5, 7 ]
(nextTwoPrimes(7));  // => [ 11, 13 ]
(nextTwoPrimes(8));  // => [ 11, 13 ]
(nextTwoPrimes(20));  // => [ 23, 29 ]
(nextTwoPrimes(97));  // => [ 101, 103 ]