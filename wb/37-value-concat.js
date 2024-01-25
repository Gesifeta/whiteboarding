const valueConcat = (arr, obj) => {
    //to hold concatinated values
    let newArray = [];

    for (let keys in obj) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === keys) {
                newArray.push(arr[i] + obj[keys])
            }
            newArray.push(arr[i])
        }
    }
    return newArray
}
const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
    (valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

    (valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }))// => [ 'a', 'b2', 'c3' ]