const pairsToString = (arr) => {
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            string += arr[i][0];
        }
    }
    return string;
}
const array1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
];
console.log(pairsToString(array1));  // => 'aaabcc'

const array2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
];
console.log(pairsToString(array2));  // => 'food!'