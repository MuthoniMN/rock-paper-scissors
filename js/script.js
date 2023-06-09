const choices = document.querySelectorAll('button')

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let playersChoice = choice.innerText
        let compChoice = createRandomChoice()
        document.getElementById('compChoice').innerText = compChoice
        document.getElementById('compChoice').style.display = 'block'
    
        if (playersChoice === "🖐" && compChoice === "✊" ||
        playersChoice === "✌" && compChoice === '🖐' ||
        playersChoice === '✊' && compChoice === "✌") {
            document.getElementById("result").innerText = "YOU WIN!!!!!"
        } else if (playersChoice === compChoice) {
            document.getElementById("result").innerText = "IT'S A DRAW!!!!!"
        } else {
            document.getElementById("result").innerText = "YOU LOSE!!!!!"
        }
    })

})

function createRandomChoice() {
    let choiceNum = Math.random() 
    if (choiceNum <= 0.33) {
        return `✊`
    } else if(choiceNum <= 0.66){
        return `🖐`
    }else {
        return `✌`
    }
}
