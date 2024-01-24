const abbreviate = (sentence) => {
    /*
    1. split sentence into words by using ' '
    2.loop through the words;
    3. if word length is greater than 4 push that word to new array;
    4. if a word length is greater than 4 remove vowels from the vowel and push
    5. join the array list and return the abreviated sentence.
    */
    function removeVowels(word) {
        let vowels = 'aeiou';
        //to collect consonants;
        let chars = word.split("");
        for (let i = 0; i < vowels.length; i++) {
            for (let j = chars.length - 1; j >= 0; j--) {
                if (vowels.includes(chars[j])) {
                    chars.splice(j, 1)
                }
            }
        }
        return chars.join("");
    }
    //to store new words
    let newSentence = [];
    let words = sentence.split(' ');
    for (let j = 0; j < words.length; j++) {
        if (words[j].length <= 4) {
            newSentence.push(words[j])
        }
        else {
            newSentence.push(removeVowels(words[j]));
        }
    }
    return newSentence.join(" ")
}
export default abbreviate