const printReverse = (start, end) => {
    let newArray = [];

    for (let i = start + 1; i < end; i++) {
        newArray.unshift(i);
    }
    return newArray;
}
export default printReverse;