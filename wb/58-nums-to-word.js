const numsToWords = (num) => {
    // create array of numbers digits
    let digits = num.split('')
    //to spell number to words
    let word = '';
    for (let j = 0; j < digits.length; j++) {
        switch (Number(digits[j])) {
            case 0: {
                word += "Zero";
            }
                break;
            case 1: {
                word += "One";
            }
                break;
            case 2: {
                word += "Two";
            }
                break;
            case 3: {
                word += "Three";
            }
                break;
            case 4: {
                word += "Four";
            }
                break;
            case 5: {
                word += "Five";
            }
                break;
            case 6: {
                word += "Six";
            }
                break;
            case 7: {
                word += "Seven";
            }
                break;
            case 8: {
                word += "Eight";
            }
                break;
            case 9: {
                word += "Nine";
            }
                break;
            default: {
                word += "Not Number";
            }
                break;
        }
    }
    return word;
}
console.log(numsToWords('42'))// => 'FourTwo'
console.log(numsToWords('123')) // => 'OneTwoThree'
console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'