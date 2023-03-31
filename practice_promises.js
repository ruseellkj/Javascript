// implement promises in the loadscript

// q1
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

let a = await loadscript("https://cdn.javascript")
a.then((value) =>{
    console.log(value)
})
// const main1 = async () =>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadscript("https://cdn.javascript/rushil")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
main1()