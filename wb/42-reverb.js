const reverb = (string) => {
    //to hold vowels
    const vowels = 'aeiou'
    //to hold arrays of characters from strin g
    let chars = string.split("");
    for (let i = chars.length; i >= 0; i--) {
        if (vowels.includes(chars[i])) {
            let spliced = chars.splice(i, chars.length).join("")
            return chars.join("") + spliced + spliced;
        }
    }
    return string;
}
(reverb('running'));  // => 'runninging'
(reverb('wild'));// => 'wildild'
(reverb('debugged'));  // => 'debuggeded'
(reverb('my'));  //) => 'my'