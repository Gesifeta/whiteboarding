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
console.log(commonFactors(12, 50));  // => [ 1, 2 ]
console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22));  // => [ 1, 11 ]
console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]