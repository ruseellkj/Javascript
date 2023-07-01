class RailwayForm{
    submit(){
        alert(this.name + ": form submitted")
    }
    cancel(){
        alert(this.name + ": form cancelled")
    }
    fill(givenname){
        this.name = givenname
    }
}

let harryForm = new RailwayForm()
let rushilForm = new RailwayForm()
harryForm.fill("Harry")
rushilForm.fill("Rushil")
harryForm.submit()
rushilForm.submit()
rushilForm.cancel()
console.log(harryForm.name)