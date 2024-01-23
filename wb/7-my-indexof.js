const myIndexOf = (array, value) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}
export default myIndexOf;