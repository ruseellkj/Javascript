// javascript can be used to send and retrieve info from the network (AJAX)

// AJAX = async javascript and XML
// it was used earlier , using XML network requests ko consider kar rhe the

let p = fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3')
// it is a 2 stage process to get the response
p.then((response) =>{
    console.log(response.status)
    console.log(response.ok)
    // return response.json()
    // or
    return response.text()
}).then((response) =>{
    console.log(response)
})