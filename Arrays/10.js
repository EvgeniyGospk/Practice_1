function isSubset(arr1, arr2) {
  if (arr1.length < arr2.length) {
    console.log("arr2 > arr1")
    return false;
  } else {
    // for (let i = 0; i < arr2.length; i++) {
    //     if(arr1.includes(arr2[i])) {
    //         arr1.splice(arr1.indexOf(arr2[i]), 1);
    //     } else return false
    // }
    let isValid = true
    arr2.forEach(el => {
        if(arr1.includes(el)) {
            arr1.splice(arr1.indexOf(el), 1);
        } else {
            isValid = false
            return
        }
    });

    return isValid
  }
  

}
module.exports = isSubset