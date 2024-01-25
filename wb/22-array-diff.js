const arrayDiff = (arr1, arr2) => {
    let arrDiff = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) arrDiff.push(arr1[i])
    }
    return arrDiff;
}
const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
    (arrayDiff(array1, array2)) // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
    (arrayDiff(array3, array4)) // => ['a', 'ab', 'c', 'c']