function deepClone(obj) {
  const cloneObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      cloneObj[key] = deepClone(value);
    } else {
      cloneObj[key] = value;
    }
  }
  return cloneObj;
}

const obj1 = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
  },
};




module.exports = deepClone;
