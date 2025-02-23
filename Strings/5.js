function removeVowels(str) {
    return str.replace(/[aeiouаеёиоуыэю]/gi, '')
}

module.exports = removeVowels