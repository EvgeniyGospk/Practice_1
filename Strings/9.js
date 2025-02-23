function rot13(str) {
    return str.split("").map((el) => {
        let charCode1 = el.charCodeAt(0) - 97
        let charCode2 = el.charCodeAt(0) - 65
        if (charCode1 >= 0 && charCode1 <= 25) {
            return String.fromCharCode((charCode1 + 13) % 26 + 97)
        } else if (charCode2 >= 0 && charCode2 <= 25) {
            return String.fromCharCode((charCode2 + 13) % 26 + 65)
        } else {
            return el
        }
    }).join("")
} 

module.exports = rot13