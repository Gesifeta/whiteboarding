const powerSequence = (base, num) => {
    let sequence = [];
    for (let i = 1; i <= num; i++) {
        sequence.push(base ** i)

    }
    return sequence;
}
(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
(powerSequence(8, 3));  // => [ 8, 64, 512 ]