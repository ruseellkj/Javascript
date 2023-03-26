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



