const reverseHyphenString = (str) => {
    /*
    1.split the string in arrays by using '-';
    2. go through the array reverse using array index.
    3. join the array list using '-' and return 
    */
    //to hold arrays of reversed words
    let newArr = [];
    //to split the sentence

    let words = str.split('-');
    for (let i = 0; i < words.length; i++) {
        newArr.unshift(words[i])
    }
    return newArr.join('-');
}
export default reverseHyphenString;