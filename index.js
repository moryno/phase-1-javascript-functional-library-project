const checkCollection = (collection) => {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}
const myEach = (collection, callback) => {
   const newCollection = checkCollection(collection);
   for(const element of newCollection){
    callback(element)
   }
   
   return collection;
}

const myMap = (collection, callback) => {
    const newCollection = checkCollection(collection);
    const newColl = new Array();
    for(const element of newCollection){
         newColl.push(callback(element))
    }
    return newColl;
}

const myReduce = (collection, callback, acc) => {
    let newCollection = checkCollection(collection);
    if(!acc){
        acc = newCollection[0];
        newCollection = newCollection.slice(1)
    }
    for(const element of newCollection){
        acc = callback(acc, element, newCollection)
    }
    return acc;
}

const myFind = (collection, predicate) =>{
    const newCollection = checkCollection(collection);
    for(const element of newCollection){
        if(predicate(element)) return element;
    }
    
}

const myFilter = (collection, predicate) => {
    const newCollection = checkCollection(collection);
    const newArray = new Array()
   for(const element of newCollection){
    if(predicate(element)) newArray.push(element)
   }
   return newArray;
}

const mySize = (collection) => {
    const newCollection = checkCollection(collection);
    return newCollection.length;
}

const myFirst = (array, n) => {
    return (n ? array.slice(0, n) : array[0] )
}

const myLast = (array, n) => {
    return (n ? array.slice(array.length - n, ) : array[array.length -1])
}

const myKeys = (object) => {
    return Object.keys(object);
}

const myValues = (object) => {
    return Object.values(object)
}

