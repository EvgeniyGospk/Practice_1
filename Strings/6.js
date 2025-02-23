function isAnagram(str1, str2) {
    return str1.replace(/\s/g, "").toLowerCase().split("").sort().join("") === str2.replace(/\s/g, "").toLowerCase().split("").sort().join("")
}

module.exports = isAnagram