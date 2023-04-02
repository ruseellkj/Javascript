let v1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initialzing the hacking program")
        }, 1000)
    })
}

let v2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hacking Rushil's username...")
        }, 2000);
    })
}
let v3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Username found : rus_eell1234...")
        }, 2000);
    })
}
let v4 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Connecting to Rushil's facebook...")
        }, 2000);
    })
}
let v5 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("facebook username : rushil02092003")
        }, 1000);
    })
}

let v6 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("facebook password: r$%%$&$@&@rushil(*^)")
        }, 3000);
    })
}

let a = document.getElementById("container")

const hacker = async () => {
    a.innerHTML = "$-- " + await v1()
    a.innerHTML += "<br>$-- " + await v2()
    a.innerHTML += "<br>$--" + await v3()
    a.innerHTML += "<br>$--" + await v4()
    a.innerHTML += "<br>$--" + await v5()
    a.innerHTML += "<br>$--" + await v6()
}

hacker()