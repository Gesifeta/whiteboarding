const variableNameify = (arr) => {
    //to hold the first word
    let nameified = [arr[0].toLowerCase()];
    for (let j = 1; j < arr.length; j++) {
        //cut the first letter and convert to uppercase
        let firstChar = arr[j].slice(0, 1).toUpperCase();
        //cut the rest of chararcters and convert ot lowercase
        let theRestChars = arr[j].slice(1, arr[j].length).toLowerCase()
        //concatinate the first character with there rest and push it to new array
        nameified.push(firstChar + theRestChars)
    }
    return nameified.join('');
}
console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'