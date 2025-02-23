function capitalizeWords(str) {
    if(str === "") {
        return ""
    }
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1, )
    }
    return str.split(' ').map(el => capitalize(el)).join(" ")
}

module.exports = capitalizeWords