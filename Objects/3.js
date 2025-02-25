function getKeys(obj) {
    if(typeof obj !== "object" || obj === null) throw Error("Передайте объект")
    return Object.keys(obj)
}

module.exports = getKeys