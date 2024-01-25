let factorial = (n) => {
    let fact = 1;
    while (n > 0) {
        fact = fact * (n)
        n--;
    }
    return fact;
}
(factorial(1));  // => 1
(factorial(4));  // => 24
(factorial(5));  // => 120
(factorial(10));  // => 3628800