let rand_num =Math.random() * (100-1) + 1
// let user_num = prompt("enter the number")
rand_num = Number.parseInt(rand_num)
var chances = 0;

do{
    let guess = prompt("enter a number between 1 - 100")
    guess = Number.parseInt(guess)
    if(guess>rand_num)
    {
        console.log("Please choose a lesser number")
    }
    else if(guess<rand_num)
    {
        console.log("Please choose a larger number")
    }
    else{
        console.log(`congratualtions! You have guessed the correct number`)
    }
    chances++

}while(guess!=rand_num)

console.log(`Your score is ${100-chances} and the guessed number is ${rand_num}`)