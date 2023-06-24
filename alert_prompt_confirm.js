alert("enter the value of a ")
let a = prompt("enter a here ")
a = Number.parseInt(a)
alert("the entered thing is of type" + (typeof(a)))
let write = confirm("do u really want to write?")
if(write)
{
    document.write(a)
}
else{
    document.write("please allow me to write here ")
}