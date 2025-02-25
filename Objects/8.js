function countOccurrences(arr, key) {
    const resObj = {}

    

    arr.forEach(element => {
        if(element[key] === undefined) {
            return
        }
        if (resObj[element[key]]) {
            resObj[element[key]]++
        } else {
            resObj[element[key]] = 1
        }
    });

    return resObj
}

console.log(countOccurrences([{ age: 25 }, { age: 30 }, { age: 25 }], "age"))

module.exports = countOccurrences