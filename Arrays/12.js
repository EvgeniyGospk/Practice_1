function groupByFrequency(array) {
    const obj = {}
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] === undefined) {
            obj[array[i]] = 1
        } else {
            obj[array[i]]++
        }
    }
    return obj
}

module.exports = groupByFrequency