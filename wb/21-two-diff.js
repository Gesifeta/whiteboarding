let twoDiff = (arr) => {
    let diff = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (num - arr[j] === 2 || num - arr[j] === -2) {
                diff.push([i, j])
            }
        }
    }
    return diff;

}
(twoDiff([2, 3, 4, 6, 1, 7])) // => [[0, 2], [1, 4], [2, 3]]
    (twoDiff([0, 2, 4, 3, 5])) // => [[0, 1], [1, 2], [3,4]]
    (twoDiff([]))  // => []