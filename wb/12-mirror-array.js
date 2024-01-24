const mirrorArray = (arr) => {

    let mirror = [];
    for (let i = 0; i < arr.length; i++) {

        mirror.unshift(arr[i]);
    }
    let mirrored = arr.concat(mirror)
    return mirrored;
}

export default mirrorArray;