function longestWord(str) {
    let arrOfLengths = str.split(" ").map((el) => el.length)
    let i = arrOfLengths.indexOf(Math.max(...arrOfLengths))
    return str.split(" ")[i]
}

module.exports = longestWord