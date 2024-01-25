const splitHalfArray = (arr) => {
    //check if number of array is odd or even
    //if odd, remove the middle element
    if (arr.length % 2 !== 0) arr.splice(Math.floor(arr.length / 2), 1)
    let halve1 = [], halve2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= arr.length / 2) {
            halve2.push(arr[i])
        }
        else halve1.push(arr[i])
    }
    return [halve1, halve2]

}
(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]