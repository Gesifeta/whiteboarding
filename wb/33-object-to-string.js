const objectToString = (obj) => {

    let string = '';
    for (let char in obj) {
        for (let i = 1; i <= obj[char]; i++) {
            string += char;
        }
    }
    return string
}
console.log(objectToString({ a: 2, b: 4, c: 1 })) // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })) // => 'boot'