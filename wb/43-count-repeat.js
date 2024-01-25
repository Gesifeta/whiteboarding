const countRepeats = (string) => {

    let repeat = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let count = 0;
        for (let j = i + 1; j < string.length; j++) {
            if (char === string[j]) {
                count++;
                continue
            }

        }
        if (count > 1) repeat++

    }
    return repeat;
}
console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('heobllootcampprep')); // => 4