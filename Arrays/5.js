function removeDuplicates(arr) {
    return [...(new Set(arr))]
}

console.log(removeDuplicates(["f", "f", 1, 2]))

module.exports = removeDuplicates