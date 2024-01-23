const fizzBuz = (num) => {
    let newArray = [];
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) continue;
        if (i % 3 == 0 || i % 5 == 0) newArray.push(i);
    }
    return newArray;

}
export default fizzBuz;