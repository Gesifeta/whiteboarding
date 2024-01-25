const longWordCount = (sentence) => {
    //splite sentence to array of words
    const words = sentence.split(" ");
    //to hold number of words greaater than 7
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 7) count++

    }
    return count;
}
(longWordCount(""));  // => 0
(longWordCount("short words only"));  // => 0
(longWordCount("one reallylong word"));  // => 1
(longWordCount("two reallylong words inthisstring"));  // => 2
(longWordCount("allwordword longwordword wordswordword"));  // => 3
(longWordCount("seventy schfifty five"));  // => 1