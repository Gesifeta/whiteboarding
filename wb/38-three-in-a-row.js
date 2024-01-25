const threeInARow = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) return true

    }

    return false;
}
(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;