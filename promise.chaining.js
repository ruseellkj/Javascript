// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             console.log("Resolved after 2 seconds")
//             resolve(56)
//     }, 2000)
// })

// p1.then((value) => {
//     console.log(value)
//     // or u can just make variable and return that
//     return new Promise((resolve, reject) => {
//             setTimeout(() => { resolve("Promise 2") }, 2000)
//     }) 
// }).then((value) => {
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
// })


// promises in the callbacks
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            // script.type = "text/javascript"
            script.src = src
            document.body.appendChild(script)
            script.onload = (script) => {
                resolve("Script has been loaded sir")
            }
            script.onerror = (script) => { 
                reject("error has been generated sir") 
            }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("Second script is ready")
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
    console.log("third script is ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})