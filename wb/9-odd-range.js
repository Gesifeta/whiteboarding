const oddRange = (num) => {
    //to hold arrays of odds
    let odds = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) odds.push(i)
    }
    return odds;
}
export default oddRange;