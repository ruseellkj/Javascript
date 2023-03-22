// generating random char 
const char = ['s','w','g']
let comp
let playagain = true;
// selecting randomly 
comp = char[Math.floor(Math.random()*3)];
let user_points = 0
let comp_points = 0
alert("are u ready for the game of snake,water and gun ? ")
let user = prompt("enter w for water, s for snake and g for gun")
while(playagain){
    if(comp == 's' && user == 'w'){
        alert(`computer win! you loose`)
        comp_points++
    }
    else if(comp == 'w' && user == 's'){
        alert(` you win! computer loose`)
        user_points++
    }
    else if(comp == 'w' && user == 'g'){
        alert(` computer win! you loose`)
        comp_points++
    }
    else if(comp == 'g' && user == 'w'){
        alert(` you win! computer loose`)
        user_points++
    }
    else if(comp == 's' && user == 'g'){
        alert(` you win! computer loose`)
        user_points++
    }
    else if(comp == 'g' && user == 's'){
        alert(`computer win! you loose`)
        comp_points++
    }
    playagain = confirm("do u want to play again and win the game ?")
}

let result
if(comp_points > user_points){
    result = "uh! oh the computer has more points "
    // console.log("uh! oh the computer has more points ")
}
else{
    result = "yay! you have more points than computer"
    // console.log("yay! you have more points than computer")
}
let show = confirm("do u want to see the final score?")
if(show == true){
    alert("Thank you for playing the game, have a good day ahead ")
    alert(result)
}
// alert("Thank you for playing the game, have a good day ahead ")

 