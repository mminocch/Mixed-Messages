
//identify the button variable below
const button = document.getElementById('rollButton');
let responseBoxOne = document.getElementById('responseBoxOne');
let responseBoxTwo = document.getElementById('responseBoxTwo');

// const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//criticalFail - reserved for a 1 only! criticalSuccess reserved for 20 only!
const criticalFail = "Crit fail. RIP. :(";
const criticalSuccess = "Crit! :)";

//not all rolls are created equally... Instead, they are either good, bad, or in between.
const goodRolls = ["Ok not bad", "Nice!", "Well done!", "This should do nicely", "Pow!"];
const inBetweenRolls = ["Could be worse", "Meh", "Maybe a modifier helps?", "Modifier plz", "Might be useful"];
const badRolls = ["Yikes", "Uh oh", "That's too bad", "Nice... try.", "That doesn't help"];

//Creates a random number between 1 and 20
function roll(){
    return Math.floor(Math.random()*20)+1
};


//Phrase selector... each array has 5 possible responses.
function phraseSelector(){
    return Math.floor(Math.random()*5);
}

//Just defining a couple of variables
let phraseSelection = phraseSelector();
let myRoll = roll();


//Function to select the phrase
function selectPhrase(){
    if(myRoll === 1){
        return criticalFail;
    } else if(myRoll >=1 && myRoll <10) {
        return badRolls[phraseSelection];
    } else if(myRoll >=10 && myRoll <15) {
        return inBetweenRolls[phraseSelection];
    } else if(myRoll >=15 && myRoll <20) {
        return goodRolls[phraseSelection];
    } else {
        return criticalSuccess;
    }
};
let finalPhrase = selectPhrase();


function finalRoll(){
    document.getElementById('responseBoxOne').innerHTML = myRoll;
    responseBoxTwo.innerHTML = finalPhrase;
};

//final phrase to output

button.addEventListener('click',finalRoll);
