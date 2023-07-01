// implement promises in the loadscript

// problem number 1 and 2
const loadscript = async (src) => {
    // creating a new promise 
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve("the script is successfully loaded" + src)
        }
        script.onerror = () => {
            reject("the script has soem error")
        }
        document.body.appendChild(script)
    })

}
// alternate method to do
// let a = loadscript("https://cdn.javascript")
// a.then((value) => {
//     console.log(value)
// })

const main1 = async () =>{
    console.log(new Date().getMilliseconds())
    let a = await loadscript("https://cdn.javascript/rushil")
    console.log(a)
    console.log(new Date().getMilliseconds())
}
main1()

// problem number 3
let p = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("this will not work as it is rejected"))
        }, 3000)
    })
}

let a1 = async () => {
    try {
        let c = await p()
        console.log(c)
    } catch (error) {
        console.log(error)
        // or
        console.log("this error has been handled")
    }
}
a1()

// problem 4
let p1 = async () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(41)
        }, 2000);
    })
}

let p2 = async () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}

let p3 = async () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(20)
        }, 3000);
    })
}

const run = async () =>{
    console.time("run")
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3()

    let a1 = p1() 
    let a2 = p2()
    let a3 = p3()

    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
    console.log(a1,a2,a3)
    console.timeEnd("run")
}

run()