// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// here resolve and reject are two callbacks
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am resolved")
            resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
    }, 5000)
})

// To get the value
p1.then((value) => {
    console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})

let p3 = new Promise((resolve,reject) => {

})

let promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("done")
    }, 2000)
})

promise.then(alert);
promise.catch(alert)