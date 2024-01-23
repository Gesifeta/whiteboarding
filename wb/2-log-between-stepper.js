const logBetweenStepper = (start, end, stepper) => {

    let newArray = [];
    for (let j = start; j <= end; j += stepper) {
        newArray.push(j);
    }
    return newArray;
}
export default logBetweenStepper;