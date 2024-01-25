const mindPsAndQs = (str) => {
    let count = 0, index = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === 'Q' || str[i] === 'P') && (str[i + 1] === 'Q' || str[i + 1] === 'P')) count++;
    }
    return count;
}

console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5