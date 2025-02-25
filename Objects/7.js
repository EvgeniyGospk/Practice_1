function objectToArray(obj) {
    return Object.entries(obj)
}

function arrayToObject(arr){
    return Object.fromEntries(arr)
}

console.log(objectToArray({a: 1, b: 2, c: 3}))
console.log(arrayToObject([["a", 1], ["b", 2], ["c", 3]]))

module.exports = { objectToArray, arrayToObject }