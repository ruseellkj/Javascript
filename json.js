let jsonObj = {
    name: "Harry",
    channel: "CWH",
    friend: "Rohan Das",
    food: "Bhindi" //#bhindiLoverSquad
} 
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Harry', 'Larry');
console.log(myJsonStr)

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj)

