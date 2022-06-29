function handleSubmit(event){
    var resultDiv = document.createElement("div")
    resultDiv.classList.add("testbox")
    var contain = document.getElementById("result-div")
    contain.appendChild(resultDiv)
    console.log(infoForm)
    event.preventDefault()
}

var infoForm = document.getElementById("form")
infoForm.addEventListener("click", handleSubmit)