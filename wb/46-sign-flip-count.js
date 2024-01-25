const signFlipCount = (arr) => {
    let count = 0;
    for (let i = 0; i <= arr.length; i++) {
        if ((arr[i] > 0 && arr[i + 1] < 0)) count++
        if (arr[i - 1] > 0 && arr[i] < 0) count++

    }
    return count;
}
console.log(signFlipCount([5, 6, 10, 3]))// => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, 7, -5])); // => 4
console.log(signFlipCount(-1, -2, -3, -4)); // => 0
console.log(signFlipCount([-1, 11, -3, 100])); // => 3