// cookies contains small amount of data in the form of strings 
// if we overwrite a cookie it doesnt get deleted instead it overwrites it

// to access the cookie write this
// alert(document.cookie) --> it contains a key value pair and each cookie is separatedn by ;
// or 
// console.log(document.cookie)

// to write our own Cookies
document.cookie = "name=Rushil02092003"


console.log(document.cookie)
document.cookie = "name=rushil02"
document.cookie = "name1=siddhi20"
document.cookie = "name=rush09" //here the name will be replaced from rushil02 to rush09
console.log(document.cookie)