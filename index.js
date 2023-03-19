import Dog from './utils/Dog.js'
import dogsData from './utils/data.js'

// Global Var
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

// DOM Var
const acceptBtn = document.getElementById("accept-button")
const rejectBtn = document.getElementById("reject-button")
const card = document.getElementById('card')

// Events
rejectBtn.addEventListener("click", no)
acceptBtn.addEventListener("click", yes)
render()

function render() {
    if(dogsData[currentDogIndex]){
        setTimeout( ()=>{
            card.innerHTML = currentDog.getDogHtml()  
        }, 750)
        
    } else {
        setTimeout( ()=>{
            card.innerHTML = currentDog.getFinishedHtml()
            acceptBtn.disabled = true
            rejectBtn.disabled = true
        }, 1000)
    }
}

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
}

function yes() {
    currentDog.setMatchStatus(true)
    console.log(currentDog)
    document.getElementById('like-div').classList.toggle('hidden')
    getNewDog()
}
function no() {
    currentDog.setMatchStatus(false)
    document.getElementById('nope-div').classList.toggle('hidden')
    console.log(currentDog)
    getNewDog()
}
