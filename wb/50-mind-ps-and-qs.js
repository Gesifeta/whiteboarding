const mindPsAndQs = (str) => {
    let count = 0, index = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === 'Q' || str[i] === 'P') && (str[i + 1] === 'Q' || str[i + 1] === 'P')) count++;
    }
    return count;
}

(mindPsAndQs('BOOTCAMP'));  // => 1
(mindPsAndQs('APCDQQPPC'));  // => 4
(mindPsAndQs('PQPQ'));  // => 4
(mindPsAndQs('PPPXQPPPQ'));  // => 5