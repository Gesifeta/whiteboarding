
const logBetween = (start, end) => {
    //to hold array of new numbers from start to end
    const newNumbers = [];
    for (let i = start; i <= end; i++) {

        newNumbers.push(i)
    }
    return newNumbers
}
export default logBetween;
