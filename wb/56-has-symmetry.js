const hasSymmetry = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[arr.length - 1 - i] !== arr[i]) return false;
    }
    return true
}
(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
    (hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
    (hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
    (hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false