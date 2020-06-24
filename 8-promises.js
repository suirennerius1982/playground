const { resolve } = require("path");
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
})

//
//
//                                    fulfilled
//                                  /
//promises         ---pending ---->
//                                  \
//                                    rejected
//
//
