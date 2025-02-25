const deepClone = require("./9")

function removeKey(obj, key) {
    const newObj = deepClone(obj)
    delete newObj[key]
    return newObj
}

const obj1 = { name: "Alice", age: 25 }

console.log(removeKey(obj1, "age"))

console.log(obj1)


module.exports = removeKey