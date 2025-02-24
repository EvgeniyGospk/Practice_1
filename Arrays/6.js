function reverseArray(arr) {
    let resArr = []
    let length = arr.length
    for (let i = 0; i < length; i++) {
        resArr.push(arr[length-i-1])
    }
    return resArr
}

module.exports = reverseArray