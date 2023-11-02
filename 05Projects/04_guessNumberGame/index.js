var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let totalGuesses = 10;
let userGuesses = [];
const previousGuesses = document.querySelector(".guesses")
const remainingGuesses = document.querySelector(".lastResult")
const answer = document.querySelector(".lowOrHi")
previousGuesses.innerHTML = userGuesses
remainingGuesses.innerHTML = totalGuesses
document.querySelector("#subt").addEventListener("click",function(e){
    e.preventDefault();
    if(totalGuesses > 1){
        const guessedNumber = parseInt(document.querySelector("#guessField").value);
        // console.log(guessedNumber);
                if(guessedNumber === "" || guessedNumber < 1 || guessedNumber > 100 || guessedNumber == NaN){
            answer.innerHTML = "Enter a valid number"
            totalGuesses--;
            userGuesses.push(guessedNumber)
            previousGuesses.innerHTML = userGuesses
            remainingGuesses.innerHTML = totalGuesses
        }else if(guessedNumber > randomNumber){
            answer.innerHTML = "Your number is Higher"
            totalGuesses--;
            userGuesses.push(guessedNumber)
            previousGuesses.innerHTML = userGuesses
            remainingGuesses.innerHTML = totalGuesses
        }else if(guessedNumber < randomNumber){
            answer.innerHTML = "Your number is Smaller"
            totalGuesses--;
            userGuesses.push(guessedNumber)
            previousGuesses.innerHTML = userGuesses
            remainingGuesses.innerHTML = totalGuesses
        }else{
            answer.innerHTML = "Hurray!! You have guessed the number."
            setTimeout(function(){
                startOver();
            },3000)
        }
    }else{
        gameOver()
    }

})

function startOver(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    answer.innerHTML = ""
    totalGuesses = 10;
    userGuesses = [];
    previousGuesses.innerHTML = userGuesses
    remainingGuesses.innerHTML = totalGuesses

}

function gameOver(){
    // const answer = document.querySelector(".lowOrHi")
    answer.innerHTML=`Game Over!! The random number was ${randomNumber}`

    setTimeout(function(){
        startOver();
    },3000)

}