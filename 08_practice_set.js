// // practice_set
// // Q_1
let age = prompt("Enter the age")
if(age < 0){
  console.log("invalid age")
}
else if(age >10 && age < 20)
{
  console.log("Age matched")
}
else{
  console.log("age out of bound")
}

// Q_2
let num = prompt("Enter a number")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("Number is divisible by 2 and 3")
}
else{
  console.log("Number is not divisible by 2 and 3")
} 

// Q_3
// let age = 22
// let a = (age>18? "you can drive": "you cannot drive")
// console.log(a)