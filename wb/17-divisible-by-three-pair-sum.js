const divisibleByThreePairSum = (arr) => {
    let pairSum = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if ((num + arr[j]) % 3 === 0) {
                pairSum.push([i, j]);
            }
        }
    }
    return pairSum;
}
const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 // => [[1, 3]]
console.log(arr1)
console.log(arr2)