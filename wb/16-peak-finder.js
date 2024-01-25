const peakFinder = (arr) => {
    /*
    array of atleast two length;
    1.Move one step forward and backward
    2.if next is greater than current and previous ,
    3. push next to new arr, else push current to new array
    4. repeat step 1-3 until you run out of arrays
    */
    //to hold peak array
    let peakArray = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            peakArray.push(i)
        }
        else if (arr[i] > arr[i + 1] && i === 0) {
            peakArray.push(i)
        }
        else if (arr[i] > arr[i - 1] && i === arr.length - 1) {
            peakArray.push(i)
        }

    }
    return peakArray
}
(peakFinder([1, 2, 3, 2, 1])); // => [2]
(peakFinder([2, 6, 1, 2, 3, 4, 5])); // => [0, 5]
(peakFinder([4, 6, 9, 4, 2, 6, 6, 8, 7, 7, 2, -4, 5])); // => [2, 6, 8]