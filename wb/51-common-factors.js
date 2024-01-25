const commonFactors = (num1, num2) => {
    // to store common factors;

    let commonFactor = [];
    //for time complexity, select the smallest from num1 and num2 and loop
    for (let i = 1; i <= (num1 < num2 ? num1 : num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            commonFactor.push(i);
        }
    }
    return commonFactor;

}
(commonFactors(12, 50));  // => [ 1, 2 ]
(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
(commonFactors(11, 22));  // => [ 1, 11 ]
(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]