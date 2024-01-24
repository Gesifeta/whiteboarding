const twoDimensionalArraySum = (arr) => {
    //to hold sum
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
    }
    return sum;
}
const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
];

console.log(twoDimensionalArraySum(arr1));  // => 40

const arr2 = [
    [2],
    [1, 9],
    [1, 1, 1]
]

console.log(twoDimensionalArraySum(arr2));  // => 15