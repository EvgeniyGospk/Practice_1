const deepClone = require("./9")

function mergeObjectsByKey(arr, key) {
    const obj = {
        [key]: {}
    }
    arr.forEach(element => {
        if (element[key] === undefined) return
        //console.log(obj[key])
        if (obj[key][element[key]] === undefined ) {
            obj[key][element[key]] = deepClone(element)
        } else {
            // obj[key][element[key]]
            Object.assign(obj[key][element[key]], element)
        }
    });

    return Object.values(obj[key])
}

const arr = [
    { name: "Alice" },
    { name: "Bob" },
    { age: 25 },
    { age: 30 }
  ];


console.log(mergeObjectsByKey(arr, "id"))

module.exports = mergeObjectsByKey