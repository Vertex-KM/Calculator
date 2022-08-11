function calculator() {
    let previousText = document.querySelector('.previous')
    let currentText = document.querySelector('.current')
    let numButtons = document.querySelectorAll('.num')
    let operationButtons = document.querySelectorAll('.operation')
    let deleteButton = document.querySelector('.delete')
    let clearButton = document.querySelector('.clear')
    let equelButton= document.querySelector('.equels')

    let currentOperand =""
    let previousOperand =""
    let operation = null

    function handleButtons() {
        numButtons.forEach(btn => {
            btn.addEventListener("click",() =>{
                currentOperand ===0? currentOperand ="":'';
            if(btn.textContent === "." && currentOperand.includes('.'))return
            currentOperand += btn.textContent
            updateDisplay()
        })
      operationButtons.forEach(btn=> {
          btn.addEventListener("click",() => {
              if(currentOperand === "")return
              operation = btn.textContent
              operate()
              updateDisplay()
          })
      })
    })

deleteButton.addEventListener('click',()=>{
    let temp;
    if(currentOperand === "you cant divide by 0") {
        currentOperand=0
        temp = currentOperand
    } else {
        temp = currentOperand.toString().slice(0,-1)
    }

if(temp === "" || temp===0) {
    temp= 0
    currentOperand=temp
    updateDisplay()
} else {
    currentOperand = parseFloat(temp)
    updateDisplay()
}})

    clearButton.addEventListener("click",() => {
        currentOperand =0
        previousOperand =""
        operation = null
        updateDisplay()
    })

    equelButton.addEventListener("click",()=>{
        calculateResults()
        updateDisplay()
    })
    }

    function operate() {
        if(currentOperand === " ")return
        if(previousOperand !== " "){
            calculateResults()
    }

        previousOperand = `${currentOperand}${operation}`
        currentOperand= " "
    }

    function calculateResults(){
        let curr = parseFloat(currentOperand);
        let prev = parseFloat(previousOperand);
        let results;

        if(isNaN(prev) || isNaN(curr))return
        operation === "+" ? results = prev + curr
        : operation === "-"? results = prev - curr
        : operation === "*"? results = prev * curr
        : operation === "÷" && curr===0 ? results = "You Can't divide by 0"
        : operation === "÷"? results = prev / curr
        : '';

        currentOperand = results
        operation= null
        previousOperand= ""
        
    }

    function updateDisplay() {
        currentText.textContent = currentOperand
        previousText.textContent = previousOperand

    }
    handleButtons();
}

calculator()