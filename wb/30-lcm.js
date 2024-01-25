const lcm = (num1, num2) => {
    let index = 1, count = 0;
    while (count < 1) {
        index++;
        if (index % num1 === 0 && index % num2 === 0) {
            count++;
        }
    }
    return index;
}

(lcm(2, 3)); // => 6
(lcm(6, 10));  // => 30
(lcm(24, 26));  // => 312