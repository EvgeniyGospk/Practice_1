function findMinMax(arr) {
    if(arr.length === 0) return {
        min: null,
        max: null
    }
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}


module.exports = findMinMax