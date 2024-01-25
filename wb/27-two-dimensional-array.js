const twoDimensionalSize = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            count++;
        }
    }
    return count;

}
const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
(twoDimensionalSize(arr1));  // => 9

const arr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
];
(twoDimensionalSize(arr2));  // => 5