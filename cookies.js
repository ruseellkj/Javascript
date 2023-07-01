// cookies contains small amount of data in the form of strings 
// if we overwrite a cookie it doesnt get deleted instead it overwrites it

// to access the cookie write this
// alert(document.cookie) --> it contains a key value pair and each cookie is separated by ;
// or 
// console.log(document.cookie)

// to write our own Cookies
document.cookie = "name=Rushil02092003"


console.log(document.cookie)
document.cookie = "name=rushil02"
document.cookie = "name1=siddhi20"
document.cookie = "name=rush09" //here the name will be replaced from rushil02 to rush09
console.log(document.cookie)

let key = prompt("enter your key")
let value = prompt("enter your value")
// encodeURIComponent is used to enter $%: etc as a string
// so it encodes into a special type  ex: %d%d%d
// and use decodeURIComponent to see what we have set the key for the cookie
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)