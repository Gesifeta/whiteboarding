const vowelShift = (str) => {
    let vowels = 'aeiou';
    // to hold array of characters
    let chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        for (let j = 0; j < chars.length; j++) {
            if (vowels.includes(char)) {
                //pick the index of char in the vowels;
                let vowel = vowels.indexOf(char)
                //delete the vowels and replace with next vowel
                //chars[i] = vowels[((vowel + 1) >= 5) ? 0 : vowel + 1] or you can use the
                chars.splice(i, 1, vowels[((vowel + 1) >= 5) ? 0 : vowel + 1])
                //Note however, if next vowel is the end, take the first vowel(a)
            }
        }
    }
    return chars.join("")
}
(vowelShift('bootcamp')); // => 'buutcemp'
(vowelShift('hello world'));  // => 'hillu wurld'
(vowelShift('on the hunt'));  // => 'un thi hant'