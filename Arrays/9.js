function secondLargest(arr) {
  if (arr.length < 2) {
    return -Infinity;
  }
  let firstMax = Math.max(...arr);
  let filtered = arr.filter(num => num !== firstMax)
  return Math.max(...filtered)
}

module.exports = secondLargest
