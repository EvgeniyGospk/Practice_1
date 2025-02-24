function shuffleArray(array) {

    if (array.length < 2) {
        return array
    }

    for (let i = array.length - 1; i >= 0; i--) {
        let randIndex = Math.floor(Math.random() * i + 1)
        let temp = array[i]
        array[i] = array[randIndex]
        array[randIndex] = temp
    }
    return array
}

console.log(shuffleArray([1]))

module.exports = shuffleArray