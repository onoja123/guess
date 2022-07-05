// Generate a random number for the guess
const answer = math.floor((math.random) * 10 +1);

// check how many times you tried
let guesses = 0;

// where the main program begins
document.getElementById("btn").onclick = function(){
   let guess =  document.getElementById("guessfield").value
        guess +=1;

        if(guess == answer){
            console.log('${answer}, is the number. it took ${guesses} to work')
        }else if(guess < answer){
            console.log('its too low')
        }else{
            console.log("its too large")
        }
}
