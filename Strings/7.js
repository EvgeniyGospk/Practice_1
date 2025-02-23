function compressWord(str) {
    if(str.length === 0) {
        return str
    } else if (str.length === 1){
        return str + "1"
    }
    
    let j = 0
    let resArr = [str[0], 1]

    for (let i = 1; i < str.length; i++) {
        if(str[i] == resArr[j]) {
            resArr[j + 1]++
        } else {
            resArr.push(str[i])
            resArr.push(1)
            j += 2
        }
    }

    return resArr.join("")

}

module.exports = compressWord