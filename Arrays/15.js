function mergeObjects(arr1, arr2, key) {
    //У каждого объекта в массивах должно быть значение по ключу
    arr1.forEach(element => {
        if (element[key] === undefined) {
            throw Error("Ошибка")
        }
    });

    arr2.forEach(element => {
        if (element[key] === undefined) {
            throw Error("Ошибка")
        }
    });

    function merge(obj1, obj2) {
        for(let key in obj2) {
            obj1[key] = obj2[key];
        }
        return obj1
    }

    const resArray = []

    arr1.forEach(element1 => {
        arr2.forEach(element2 => {
            if(element1[key] === element2[key]) {
                const obj1 = JSON.parse(JSON.stringify(element1))
                const obj2 = JSON.parse(JSON.stringify(element2))
                const resObj = merge(obj1, obj2)
                resArray.push(resObj)
            }
        });
    });

    return resArray

}

module.exports = mergeObjects