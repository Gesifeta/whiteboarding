const showAdults = (ObjArray) => {
    let filtered = []
    ObjArray.map((adult) => {
        if (adult.age >= 18) {
            filtered.push(adult.name)
        }
    })
    return filtered

}
export default showAdults