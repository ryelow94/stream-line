var button = document.createElement("button")
var clearButton = document.getElementById("clear-button")
let cleared = false;
function handleSubmit(event){
    event.preventDefault()
    console.log(event)

    var arr = []
    var summary = document.createElement("h3")
    var dataCenter = document.createElement("h3") 
    var environment = document.createElement("h3")
    var url = document.createElement("h3")
    var customerName = document.createElement("h3")
    var source = document.createElement("h3")
    var purge = document.createElement("h3")
    var edition = document.createElement("h3")
    var dueDate = document.createElement("h3")
    var priority = document.createElement("h3")
    var escalate = document.createElement("h3")
    var approved = document.createElement("h3")
    var explanation = document.createElement("h3") 



    arr.push( dataCenter, environment, url, customerName, source, purge, edition, dueDate, priority, escalate, approved, explanation, button)
     summary.textContent = "Lockpath | " + event.target[5].value + " | " + event.target[1].value
     dataCenter.textContent = event.target[2].value
     environment.textContent = event.target[3].value
     url.textContent = event.target[4].value 
     customerName.textContent = event.target[5].value 
     source.textContent = event.target[6].value 
     purge.textContent = event.target[7].value 
     edition.textContent = event.target[8].value 
     dueDate.textContent = event.target[9].value 
     priority.textContent = event.target[10].value 
     escalate.textContent = event.target[11].value 
     approved.textContent = event.target[12].value 
     explanation.textContent = event.target[13].value  
     button.textContent = "Copy to Clipboard"
     


     var summaryField = document.getElementById("summary-submission")
     var sumh2 = document.getElementById("summary-field") 
     var desh2 = document.getElementById("description-field")
     var field = document.getElementById("submission") 
     

     sumh2.style.visibility = 'visible'
     desh2.style.visibility = "visible"
     field.style.visibility = "visible" 
     summaryField.style.visibility = "visible"
     clipboard.style.visibility = "visible" 




     summaryField.appendChild(summary)

     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let num = "a"
       num = document.createElement("h3") 
       num.style.fontWeight= "700"
       element.classList = "description"
       element.style.fontWeight = "400"
      num.textContent = event.target[i+2].name + " " 
        field.appendChild(num)
        num.appendChild(element)
        num=num+"a"
     } 
    infoForm.reset()
    var clearButton = document.getElementById("clear-button")
    clearButton.style.visibility = 'visible'

    var clip = document.getElementById("clipboard")
    clip.style.lineHeight="0.5"
}
clearButton.onclick = () => {
    var clip = document.getElementById("clipboard")
        clip.innerText = "" 
}
button.onclick = async () => {
    var clip = document.getElementById("clipboard")
    button.innerText=""
    clearButton.innerText=""
    var clipText = clip.innerText
    console.log(clipText)
    await navigator.clipboard.writeText(clipText)
    button.innerText="Copy to Clipboard"
    clearButton.innerText="Clear"
} 
var infoForm = document.getElementById("form")
infoForm.addEventListener("submit", handleSubmit)