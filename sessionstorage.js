// in session storage the data only stays wihtin a tab or even when u refresh it 
// but if we close and re-open the tab the data is gone/lost

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}