function sumArray(arr) {
    return arr.reduce((ac, cur) => {
        return ac += cur
    }, 0)
}

console.log(sumArray([1, 2, 3, 4, -1]))

module.exports = sumArray