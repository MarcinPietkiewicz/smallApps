

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


function addElement(element,text,target){
    let  htmlElement = document.createElement(element)
    htmlElement.innerText = text
    target.append(htmlElement)
}






//create AC button
// console.log(acButton)

let displayParent = display.parentElement



// console.log(numbers)
// console.log(operators)

let dotButton = document.createElement('button')
dotButton.innerText = '.'

addElement('button','AC', displayParent)


// add dot button

let lastRowButtons = document.lastElementChild.lastElementChild.children[4]
let plusButton = lastRowButtons.children[1]
// two methods equal
// lastRowButtons.insertBefore(dotButton, plusButton)
// plusButton.before(dotButton)
// lastRowButtons.appendChild(dotButton)

addElement('button', '.', plusButton.parentNode)
