// random value generated
 playerName = localStorage.getItem("playerName")
var y = Math.floor(Math.random() * 10 + 1)
var guess = 0
function submit(){
    var x = document.getElementById("guessField").value
if(x == y){
    guess = guess + 1
    alert("CONGRADULATIONS!!! " + playerName + " YOU GUESSED IT RIGHT IN" + guess + "Guess")
}
else if (x > y){
    guess++
    alert("OPPS SORRY TRY A SMALLER NUMBER ")
}
else {
    guess++
    alert("OPPS SORRY TRY A GREATER NUMBER")
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
}
}
  
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
