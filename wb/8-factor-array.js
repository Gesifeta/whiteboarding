const factorArray = (array, num) => {
    //to hold factors of num
    let factors = [];
    //loop throught the array and check if there exist num factors;
    for (let i = 0; i < array.length; i++) {
        if (num % array[i] === 0) {
            factors.push(array[i]);
        }
    }
    return factors;

}
export default factorArray;