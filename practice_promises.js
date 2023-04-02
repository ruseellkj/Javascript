// implement promises in the loadscript

// problem number 1 and 2
const loadscript = async (src) => {
    // creating a new promise 
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onlaod = (script) => {
            resolve("the script is successfully loaded" + src)
        }
        script.onerror = () => {
            reject("the script has soem error")
        }
        document.body.appendChild(script)
    })

}
// alternate method to do
let a = loadscript("https://cdn.javascript")
a.then((value) =>{
    console.log(value)
})
 
// const main1 = async () =>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadscript("https://cdn.javascript/rushil")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// main1()

// problem number 3
let p = () =>{
    new Promise((resolve,reject) => {
    setTimeout(() => {
        reject(new Error("this will not work as it is rejected"))
    }, 3000)
})
}
let a1 = async () =>{
    try{
        let c = await p()
    console.log(c)
    }catch(error){
        console.log(error)
        or
        console.log("this error has been handled")
    }
}
a1()