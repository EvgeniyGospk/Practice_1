function groupBy(arr, key) {
  const resObj = {};
  arr.forEach((element) => {
    if (resObj[element[key]] !== undefined) {
        console.log(resObj[element[key]])
        resObj[element[key]].push(element)
    } else {
        console.log(resObj[element[key]])
        resObj[element[key]] = [element]
    }
  });

  return resObj;
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
console.log(groupBy(users, "age"));

module.exports = groupBy;
