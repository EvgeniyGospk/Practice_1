function updateNestedProperty(obj, path, value) {
  function getProperty(obj, arr) {
    if (obj[arr[0]] === undefined) {
      return undefined;
    } else if (arr.length === 1) {
      return obj;
    } else {
      return getProperty(obj[arr[0]], arr.splice(1));
    }
  }
  const arrSaved = path.split(".");
  const arr = path.split(".");
  // console.log(arr[arr.length - 1])
  // console.log(getProperty(obj, arr))
  const property = getProperty(obj, arr);
  if (property !== undefined) {
    property[arrSaved[arrSaved.length - 1]] = value;
  }
}

const obj = { a: { b: { c: 10 } } };
updateNestedProperty(obj, "a.b.c", 20);
console.log(obj); // { a: { b: { c: 20 } } }

updateNestedProperty(obj, "a.b.x", 20);

module.exports = updateNestedProperty;
