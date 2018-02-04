var letterArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    var wins = 0
    var losses = 0
    var guessesleft = 9
    var letterspicked = []
    var computerGuess =  letterArr[Math.floor(Math.random()*letterArr.length)]    

    function reset(){
        guessesleft = 9
        letterspicked=[]
        computerGuess=  letterArr[Math.floor(Math.random()*letterArr.length)]
    }
    reset()
    


    
   document.onkeyup = function(event){
    //   fires player guess
    var userguess = event.key;
    console.log(userguess)
    console.log(computerGuess)
       if(userguess === computerGuess){
           wins++
           reset()       
       }
       else if (guessesleft ===0){
           alert("Computer Guess was " + computerGuess)
           losses++
           reset()
           console.log(losses)      
       }
       else{
        guessesleft--
        letterspicked.splice(0,0,userguess)
        console.log(letterspicked)
       }

    $("#wins").text("Wins: "+ wins)    
    $("#losses").text("Losses:"+ losses)
    $("#initial").text("Guesses Left: "+ guessesleft)
    $("#Guessmade").text("What you have guessed: " + letterspicked)
   }
