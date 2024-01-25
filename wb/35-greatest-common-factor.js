const greatestCommonFactor = (num1, num2) => {
    let greatest = 1;
    for (let i = 1; i <= num1; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            if (i > greatest) {
                greatest = i;
            }
        }
    }
    return greatest;
}
(greatestCommonFactor(15, 25)) // => 5
    (greatestCommonFactor(16, 24)) // => 8
    (greatestCommonFactor(7, 11)) // => 1