function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
      callback(value);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
      result.push(callback(value));
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    const startingIndex = acc !== undefined ? 0 : 1;
    for (let i = startingIndex; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
  }
  
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
      if (predicate(value)) return value;
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let value of values) {
      if (predicate(value)) result.push(value);
    }
    return result;
  }
  
  function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.keys(collection);
    return values.length;
  }
  
  function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
  }
  
  function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }