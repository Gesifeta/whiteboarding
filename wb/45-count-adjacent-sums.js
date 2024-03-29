const countAdjacentSums = (arr, num) => {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === num) count++
    }
    return count;
}
(countAdjacentSums([1, 5, 1], 6))// => 2
(countAdjacentSums([7, 2, 4, 6], 7))// => 0
(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3