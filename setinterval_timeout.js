 document.write("hello")



 const sum = (a,b,c) =>{
    console.log("yes i am running", (a+b+c))
 }
//  let a = setTimeout(function () {
//     alert("hello my name is rushil jariwala")
//  }, 3000)

let s = setTimeout(sum, 2000, 1, 2, 7)
// console.log(s)

let r = prompt("hey! do u want to see the sum? (y/n) ")
if( "n" == r){
    clearTimeout(s);
}
console.log(s)


//  let b = prompt("hey! do u want to know my name again ? (y/n) ")
//  if("n" == b){
//     clearTimeout(a)
//  }

//  console.log(a)



// setInterval(function (){
//     alert("hello this is macbook pro 16' ")
// }, 3000);


// now using setinterval by a function 


const prod = (a,b,c) =>{
    alert("welcome to the new world!" , (a*b*c))
}

let x = setInterval(prod, 2000, 1,3,6)
console.log(s)
