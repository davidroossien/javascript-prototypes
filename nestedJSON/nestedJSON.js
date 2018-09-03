// safe way to access properties in JSON
// ref: https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f

const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX',
            someArray: ['1','2','3','4','5']
        }
    }
}

// 2 levels down: user,personalInfo,city
const name = ((user || {}).personalInfo || {}).name;
console.log(name);

// 3 levels down: user,personalInfo,address,city
// formating hint:
// 1. add an additional ( to the front for each level down
// 2. then add .propertyNmae || {}) for each additional level down
const city = (((user || {}).personalInfo || {}).address || {}).city;
console.log(city);

// 3 levels down: user,personalInfo,address,someArray
const someArray = (((user || {}).personalInfo || {}).address || {}).someArray;
console.log("someArray.length = " + someArray.length + " someArray = " + someArray);


const arrayNest = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        addresses: [{
                line1: '100 E Main St',
                line2: 'Suite 100',
                city: 'Seattle',
                state: 'WA'
            },
            {
                line1: '200 Mayberry St',
                line2: 'Apt 200',
                city: 'Austin',
                state: 'TX'
            }]
    }
}

/**
 * getNestedArrayProperty lets the caller extract a propertyName from an array in a
 * deeply nested JSON object.
 * 
 * The caller must specify an array of nested properties and the arrayIndex.
 * Example: [level1Property, level2Property, arrayIndex]
 * 
 * Optionally, the caller can specify the propertyName to extract.
 * Example: [level1Property, level2Property, arrayIndex, propertyName]
 *
 * @param {*} sourceObject a JSON object that contains a nested array
 * @param {*} pathArr an array that specifies what the caller wants to extract
 */
const getNestedArrayProperty = (sourceObject, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, sourceObject);
}

var addressObject = getNestedArrayProperty(arrayNest, ['personalInfo', 'addresses', 0]);
console.log("getNestedArrayProperty: addressObject = " + JSON.stringify(addressObject));

var city1 = getNestedArrayProperty(arrayNest, ['personalInfo', 'addresses', 1, 'city']);
console.log("getNestedArrayProperty: " + city1);


// array reduce just for testing
// var numbers = [65, 44, 12, 4, 69];

// function getSum(total, num) {
//     return total + num;
// }

// function myFunction() {
//     // 6 is an initial value
//     // getSum has 
//     var total = numbers.reduce(getSum, 6);
//     console.log("total = " + total);
// }

// myFunction();