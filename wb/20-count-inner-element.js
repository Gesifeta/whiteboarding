const countInnerElement = (arr) => {

    //to hold repeat elements
    let elementRepeat = {};
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {


            for (let l = 0; l < arr[i].length; l++) {
                let item = arr[i][l]; let count = 0;
                for (let k = 0; k < arr[i].length; k++) {
                    if (item == arr[i][k]) {
                        count++;
                    }
                }
                elementRepeat[item] = count;
            }


        }
    }

    return elementRepeat;

}
const arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
]

console.log(countInnerElement(arr1)) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
    ['a', 'b', 'c', 'd'],
    ['a', 'b'],
    ['a', 'c', 'd', 'a']
]

console.log(countInnerElement(arr2)) // => {a: 4, b: 2, c: 2, d: 2}