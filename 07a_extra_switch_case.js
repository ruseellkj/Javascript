let day = prompt("Enter a day")
switch(day){
  case 'Monday':
    console.log("It is a Working day")
    break
  case 'Tuesday':
    console.log("It is the secong working day")
    break
  case 'Sunday':
    console.log("It is a holiday and go out for a trip")
    break
  case 'Friday':
    console.log("It is not a holiday")
    break
  case 'Saturday':
    console.log("It is a Partial holiday or Half-day")
    break
  case 'Wednesday':
    console.log("It is not a holiday , pls work accordingly")
    break
  default:
    console.log("Enter a valid day")
}