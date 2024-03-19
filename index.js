function myEach(collection,callback) {
    let workingArray;
    if (!Array.isArray(collection)) {
        workingArray = Object.values(collection);
    }else{
        workingArray = [...collection];
    }
    for (let i = 0; i < workingArray.length; i++) {
        callback(workingArray[i]);
    }
    return collection;
}

function myMap(collection,callback) {
    let workingArray;
    if (!Array.isArray(collection)) {
        workingArray = Object.values(collection);
    }else{
        workingArray = [...collection];
    }
    for (let i = 0; i < workingArray.length; i++) {
        workingArray[i] = callback(workingArray[i]);
    }
    return workingArray;
}

function myReduce(collection,callback, acc) {
    console.log(`acc: ${acc}`);
    let workingArray;
    if (!Array.isArray(collection)) {
        workingArray = Object.values(collection);
    }else{
        workingArray = [...collection];
    }
    if (acc === undefined) {
        acc = workingArray[0];
        workingArray.shift();
    }
    for (let i = 0; i < workingArray.length; i++) {
        acc = callback(acc,workingArray[i]);
    }
    return acc;
}

function myFind(collection,callback) {
    let workingArray;
    if (!Array.isArray(collection)) {
        workingArray = Object.values(collection);
    }else{
        workingArray = [...collection];
    }
    for (let i = 0; i < workingArray.length; i++) {
        if (callback(workingArray[i])) {
            return workingArray[i]
        }
    }
}

function myFilter(collection,callback) {
    let workingArray;
    let arrayToReturn = [];
    if (!Array.isArray(collection)) {
        workingArray = Object.values(collection);
    }else{
        workingArray = [...collection];
    }
    for (let i = 0; i < workingArray.length; i++) {
        if(callback(workingArray[i])){
            arrayToReturn.push(workingArray[i])
        }
    }
    return arrayToReturn;
}

function mySize(collection) {
    let workingArray;
    if (!Array.isArray(collection)) {
        workingArray = Object.values(collection);
    }else{
        workingArray = [...collection];
    }
    return workingArray.length;
}

function myFirst(collection, amount) {
    if(amount === undefined){
        return collection[0];
    }else {
        return collection.slice(0,amount);
    }
}

function myLast(collection, amount) {
    if(amount === undefined){
        return collection[collection.length-1];
    }else {
        return collection.slice(0-amount);
    }
}

//mySortBy

function myFlatten(collection, shallow, newArr=[] ) {
    let done = true;
    for (let i = 0; i < collection.length; i++) {
        if(Array.isArray(collection[i])){
            done = false;
            for (let j = 0; j < collection[i].length; j++) {
                newArr.push(collection[i][j]);
            }
        } else{
            newArr.push(collection[i])
        }
    }
    if(shallow || done){
        return newArr;
    } else{
        return myFlatten(newArr);
    }
}

function myKeys(collection) {
    const arrayToReturn = []
    for (const key in collection) {
        arrayToReturn.push(key);
    }
    return arrayToReturn;
}

function myValues(collection) {
    const arrayToReturn = []
    for (const key in collection) {
        arrayToReturn.push(collection[key]);
    }
    return arrayToReturn;
}