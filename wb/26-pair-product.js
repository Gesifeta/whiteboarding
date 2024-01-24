const pairProduct = (arr, target) => {
    //to hold pair of indices
    let pair = [];
    let index = 0;
    while (index < arr.length) {
        let value = arr[index]
        let j = index + 1;
        while (j < arr.length) {
            if (value * arr[j] === target) pair.push([index, j])
            j++
        }
        index++
    }
    return pair;

}
console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]