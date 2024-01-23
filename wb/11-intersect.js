const intersect = (arr1, arr2) => {
    let intersectArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if (num === arr2[j]) intersectArray.push(num);
        }
    }
    return intersectArray;
}
export default intersect;