const zipArray = (arr1, arr2) => {
    //to hold zipped array
    let zip = [];
    for (let i = 0; i < arr1.length; i++) {
        zip.push([arr1[i], arr2[i]])
    }
    return zip;
}
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
console.log(result)