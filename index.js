function myEach(collection, callback) {
    let values = Array.isArray(collection) ? collection: Object.values(collection);
    for (let value of values) {
        callback(value);
    }
    return collection;
}

function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection: Object.values(collection);
    return values.map(callback);
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection: Object.values(collection);
    return acc !== undefined ? values.reduce(callback, acc) : values.reduce(callback);
}

function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection: Object.values(collection);
    return values.find(predicate);
}

function myFilter(collection, predicate) {
    let values = Array.isArray(collection) ? collection: Object.values(collection);
    return values.filter(predicate);
}

function mySize(collection) {
    let values = Array.isArray(collection) ? collection: Object.values(collection);
    return values.length;
}

function myFirst(array, n) {
    if (!Array.isArray(array) || array.length === 0) return n ? [] : undefined;
    return n !== undefined ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    if (!Array.isArray(array) || array.length === 0) return n ? [] : undefined;
    return n !== undefined ? array.splice(-n) : array[array.length - 1];
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}