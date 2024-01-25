const elementCount = (arr) => {

    let repeatElements = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (element === arr[j]) {
                count++;
            }
        }
        repeatElements[element] = count;
    }
    return repeatElements;
}
(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }