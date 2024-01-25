const moreDotLessDash = (str) => {
    let dash = 0, dot = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") dot++
        else if (str[i] === "-") dash++
    }
    return dot > dash;
}
console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-')) // => false
console.log(moreDotLessDash('..--'));  // => false)