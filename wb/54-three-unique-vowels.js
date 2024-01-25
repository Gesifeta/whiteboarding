const threeUniqueVowels = (string) => {
    let vowels = 'aeiou';
    let count = 0;
    //to collect found vowels so that we can check latter for unique counting
    let collectFoundVowels = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        for (let j = 0; j < string.length; j++) {
            //check if a char is a vowel
            if (vowels.includes(char)) {
                //if it is a vowel and not added to collected vowels, add it
                //and increment  count by one more
                if (!collectFoundVowels.includes(char)) {
                    count++;
                    collectFoundVowels.push(char);
                }

            }
        }

    }
    //uniquely collected vowels are greater than three , returns true
    return count >= 3
}

console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dogiu'));  // => false
console.log(threeUniqueVowels('go home'));  // => false