const oddWordsOut = (sentence) => {
    let words = sentence.split(" ")
    let spliced = ''
    for (let i = 0; i < words.length; i++) {
        if ((words[i].length) % 2 === 0) {
            spliced += " " + words[i];
        }

    }
    return spliced;
}
(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
(oddWordsOut('what is the answer'));  // => 'what is answer'