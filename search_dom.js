let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "red"
ctitle.style.color = "blue"

let ctitle1 = document.querySelectorAll(".card-title")
console.log(ctitle1)
ctitle1[0].style.color = "red" 
ctitle1[1].style.color = "blue" 
ctitle1[2].style.color = "purple"

document.querySelector(" .this ").style.color = "red"
document.querySelector(" .this ").style.background = "black"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))