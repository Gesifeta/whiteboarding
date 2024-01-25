import isPrime from "../wb/5-is-prime.js"

let firstPrimes = (n) => {
    let count = 0;
    let index = 1;
    let primes = []
    while (count <= n) {
        if (isPrime(index)) {
            count++
            primes.push(index)
        }
        index++;
    }
    return (primes)
}
firstPrimes(5);