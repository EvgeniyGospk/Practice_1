function countChar(str, char) {
    return str.toLowerCase().split('').reduce((ac = 0, cur) => {
        if(cur === char) return ++ac
        return ac
        
    }, 0)
}

module.exports = countChar