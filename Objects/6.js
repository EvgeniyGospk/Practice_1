function filterObject(obj, keysToKeep) {
    const resObj = {}
    keysToKeep.forEach(element => {
        resObj[element] = obj[element]
    });
    return resObj
}

module.exports = filterObject