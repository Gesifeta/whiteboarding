const hipsterfyWord = (word) => {
    let vowels = 'aeiou';
    //split words to array;
    let chars = word.split("");
    for (let i = chars.length - 1; i >= 0; i--) {
        if (vowels.includes(chars[i].toLowerCase())) {
            chars.splice(i, 1)
            return chars.join("")
        }

    }
    return null;
}
(hipsterfyWord('proper')) // => 'propr'
    (hipsterfyWord('tonic'))// => 'tonc'
    (hipsterfyWord('PANTHER')) // => 'PANTHR'
    (hipsterfyWord('BACKWARDS')) // => 'BACKWRDS
export default hipsterfyWord;