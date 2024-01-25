const isPassing = (assessments) => {
    //to hold sum of assessments
    let sum = 0;
    for (let j = 0; j < assessments.length; j++) {
        sum += assessments[j].score;
    }

    return (sum / assessments.length) >= 70;

}
const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
];

(isPassing(assessments1)) // => true
const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
];

(isPassing(assessments2)) // => false