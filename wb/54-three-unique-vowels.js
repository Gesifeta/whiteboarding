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

(threeUniqueVowels('delicious'));  // => true
(threeUniqueVowels('the bootcamp'));  // => true
(threeUniqueVowels('bootcamp'));  // => false
(threeUniqueVowels('dogiu'));  // => false
(threeUniqueVowels('go home'));  // => false