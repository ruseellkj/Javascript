let marks ={
    harry : 90,
    rushil : 99,
    monika : 8,
    ruhi : 78
}

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// using for-in loops
for(let key in marks){
    console.log("The marks of " + key + " are " + key)
}


let cn = 55
let i 
// i = prompt("enter a number")
while(i!=cn){
    console.log("try again")
    i = prompt("enter a number")
}
console.log("you have entered the correct number")


const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4
}

let x = mean(4,5,6,7)
console.log(x)