const reverse2D = (arr) => {
    let reversed = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            reversed += arr[i][j];
        }
    }
    return reversed;
}
const arr1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
];

console.log(reverse2D(arr1)) // => 'ihgfedcba'
const arr2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
];
console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'