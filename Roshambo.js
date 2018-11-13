//This function will run once a student clicks 
// on an image of a symbol.
function chooseWinner(userChoice,compChoice)
{

// compChoice is parameter for testing purposes
if(compChoice === undefined);
{ 
    //select CompChoice if not passed in as argument.  
    //select a random number 0, 1 or 2
	var listItems =  getElementById('userChoice');
	var random = Math.floor(Math.random() * 3 );
    //set the compChoice variable to string 
    // rock paper or scissors
    var str = ['rock','paper','scissors'];
}

//This uses an alert to tell user what choices
//  were made
alert(`User Chose ${userChoice}`);
alert(`Computer Chose ${userChoice}`);

//let's grab all three images using TagName 
var imgArray = document.getElementsByTagName("str");
    
//loop through imgArray and hide all non choices.
for(var = amgArray) {
    //If userChoice is NOT same as Element's id
    if( userChoice("is not the same as Element's id")); {}
        // Change display on current element to none like so
        // currentEL.style.display = "none";
		currentEL.style.display = "none"
    }
}

//Use if statements to decide winner
if(userChoice === 'rock' && compChoice === 'paper') {
	winner = 'computer';
} // .....

//display winner in contents of div id="content" 


}