function invertObject(obj) {
    const resObj = {}
    for(let [key, value] of Object.entries(obj)) {
        console.log(key, value)
        resObj[value] = key
    }
    return resObj
}


module.exports = invertObject