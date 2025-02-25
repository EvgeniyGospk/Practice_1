function getNestedProperty(obj, path) {
    function getProperty(obj, arr) {
        if(obj[arr[0]] === undefined) {
            return undefined
        } else if (arr.length === 1) {
            return obj[arr[0]]
        } else {
            return getProperty(obj[arr[0]], arr.splice(1, ))
        }
    }
    const arr = path.split(".")
    return getProperty(obj, arr)
}

const obj = { a: { b: { c: 10 } } };
    console.log(getNestedProperty(obj, "a.b.c")) // 10
    console.log(getNestedProperty(obj, "a.b.x")) // undefined

module.exports = getNestedProperty