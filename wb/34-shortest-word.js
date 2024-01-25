const shortestWord = (sentence) => {
    //split sentence to array of words
    let words = sentence.split(" ");
    //to hold the shortest word;
    let shortest = words[0];
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        for (let j = 0; j < words.length; j++) {
            if (word.length > words[j].length) {
                shortest = words[j];
            }
            shortest = word;
        }
        return shortest;

    }
}
console.log(shortestWord('is  pp academy is a cool')) // => 'is'
console.log(shortestWord(' programming bootcamp assessment least ')) // => 'bootcamp'