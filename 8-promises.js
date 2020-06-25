const { setupMaster } = require("cluster")

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//Using promise chaining

add(1, 2).then((result) => {
    console.log(result)
    return add(result, 5)
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

//Example without promise chaining:

/* add(1, 2).then((result) => {
    console.log(result)

    add(result, 5).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}).catch((error) => {
    console.log(error)
}) */

/* const { resolve } = require("path");
const { rejects } = require("assert");

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1,2,3])
        reject('Error reject promises')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!!!', error)
}) */

//
//
//                                    fulfilled
//                                  /
//promises         ---pending ---->
//                                  \
//                                    rejected
//
//
