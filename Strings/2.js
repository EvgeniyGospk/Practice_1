function isPalindrome(str) {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase()
}

module.exports = isPalindrome