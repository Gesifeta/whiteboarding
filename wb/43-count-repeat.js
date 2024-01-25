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
(countRepeats('calvin')); // => 0
(countRepeats('caaaalvin')); // => 1
(countRepeats('pops')); // => 1
(countRepeats('mississippi')); // => 3
(countRepeats('heobllootcampprep')); // => 4