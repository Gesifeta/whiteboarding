const maxValue = (arr) => {
    let max = arr[0];
    for (let j = 1; j < arr.length; j++) {
        let num = arr[j];
        if (max < num) {
            max = num;
        }
    }
    return max;
}
export default maxValue;