let display = document.getElementById("display")
display.disabled = true
let operators = document.getElementsByClassName('operator')
operators = Array.from(operators)

let buttons = document.getElementsByTagName('button')
let numbers = Array.from(buttons).filter((button) => {
    let number = Number(button.textContent)
    if (isNaN(number)){
        return false

    }
    else{
        return true
    }

})
let divs = Array.from(document.firstElementChild.children[1].children).filter(element => element.tagName === 'DIV')

// hack
divs[4].lastElementChild.previousElementSibling

//create AC button
let acButton = document.createElement('button')

let body = display.parentElement.parentElement //body

acButton.innerText = 'AC'
// console.log(acButton)

let displayParent = display.parentElement
displayParent.append(acButton)


// console.log(numbers)
// console.log(operators)

let dotButton = document.createElement('button')
dotButton.innerText = '.'

let lastRowButtons = document.lastElementChild.lastElementChild.children[4]
let plusButton = lastRowButtons.children[1]
lastRowButtons.insertBefore(dotButton, plusButton)

