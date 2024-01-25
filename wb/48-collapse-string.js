const collapseString = (str) => {
    let chars = str.split("")
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (chars[j] === chars[j + 1]) {
                chars.splice(j, 1)
            }

        }

    }
    return chars.join("")
}
(collapseString('apple')); // => 'aple'
(collapseString('AAAaalviiiiiiiin!!!')); // => 'Aalvin!'
(collapseString('hello   app academy')); // => 'helo ap academy'