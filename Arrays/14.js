"use strict"

function chunkArray(array, size) {
    const resArray = []
    let tmpArr = []
    let count = 0
    // console.log(size)
    for (let i = 0; i < array.length; i++) {
        tmpArr.push(array[i]);
        count++ 
        if(count === size) {
            // console.log(tmpArr)
            count = 0
            resArray.push(tmpArr)
            // console.log(resArray)
            tmpArr = []
        }
    }

    if(tmpArr.length !== 0)  resArray.push(tmpArr)
    return resArray
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 1))

module.exports = chunkArray