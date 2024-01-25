let countScores = (arrPeople) => {
    let people = {}
    for (let j = 0; j < arrPeople.length; j++) {


        let name = arrPeople[j].name;
        for (let i = j; i < arrPeople.length; i++) {
            let score = 0;
            let names = '';
            if (name === arrPeople[i].name) {
                score += arrPeople[i].score;
                names = arrPeople[i].name;
                people.name = name;
                people.score = score
            }
        }


    }
    (people)
    return (arrPeople)

}
export default countScores