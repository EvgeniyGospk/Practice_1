function sortByKey(array, key, order) {
  if (order === "asc") {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j + 1][key] < array[j][key]) {
          let tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;
        }
      }
    }
  } else if (order === "desc") {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j + 1][key] > array[j][key]) {
          let tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;
        }
      }
    }
  } else {
    return -1;
  }

  return array;
}

function sortByKey2(array, key, order) {
  return array.sort((a, b) => a[key] - b[key])
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log(sortByKey2([
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 },
      ],
      "age",
      "ask"))

// console.log(sortByKey(people, "age", "asc"));
// console.log(
//   sortByKey(
//     [
//       { name: "Alice", age: 30 },
//       { name: "Bob", age: 25 },
//       { name: "Charlie", age: 35 },
//     ],
//     "age",
//     "ask"
//   )
// );

module.exports = sortByKey;
