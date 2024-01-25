const evenSumArray = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        //to hold sum of even numbers
        let sum = 0;
        //to hold the num
        let num = arr[j];
        for (let i = 1; i <= num; i++) {
            //check if the number is even
            //if it is even, add it to sum;
            if (i % 2 === 0) sum += i;

        }
        //assign nth element with the sum;
        arr[j] = sum;
    }
    return arr;
}
(evenSumArray([6, 7, 5]))// => [ 12, 12, 6 ]
    (evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]