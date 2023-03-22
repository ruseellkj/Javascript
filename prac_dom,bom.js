// let runAgain = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false
// }

// while (runAgain) {
//   let age = prompt("Enter your age")
// //   convertion from string to number
//   age = Number.parseInt(age)
//   if (age < 0) {
//     console.error("Please enter a valid age");
//     break;
//   }

//   if (canDrive(age)) {
//     alert("Yes you can drive")
//   }
//   else {
//     alert("You cannot drive")
//   }
//   runAgain = confirm("Do you want to play again?")
// }

// or 

let age = prompt("enter your age")
age = Number.parseInt(age)
let runagain = true

while(runagain){
    if(age < 0){
        console.error("Please enter a valid age")
        break;
    }
    else{
        alert( `your ${age >= 18 ? "is" : "isn\'t"} eligible to vote`)
    }
    if(age > 5){
        location.href ="https://leetcode.com/"
    }
    runagain = confirm("are you sure u want to re-enter the age ?")
}