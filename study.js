
/* blackjack game
prepared by chakiwebs

*/

let suits = ['hearts', 'clubs', 'diamonds', 'spades'];
let values = ['ace', 'king', 'queen', 'Jack', 'Ten', 'Nine', 'Eight', 'seven', 'six','five', 'four', 'Three', 'Two'];

let textArea = document.getElementById('area'),
    newGame = document.getElementById('new'),
    hitbutton = document.getElementById('hit'),
    staybutton = document.getElementById('stay');
    //okeybutton = document.getElementById('okey');

function showstatus(){
    if(!gameStarted){
        textArea.innerText = "welcome to Blackjack \n";        
        return;
        }
    
    // dealercards status 
     
    let dealercardstring = "";
    for(let i=0; i<dealercards.length; i++){
        dealercardstring += getCardString(dealercards[i]) + '\n';
        
    }

    //playerscards status
    let playercardstring = "";
    for(let i=0; i<playercards.length; i++){
        playercardstring += getCardString(playercards[i]) + '\n';
    }

    updatescores();
    textArea.innerText=
    'Dealer has:\n' +
    dealercardstring + 
    '(score: '+ dealerscore + ')\n\n'+

    'player has:\n' +
    playercardstring + 
    '(score: '+ playerscore + ')\n\n';

    if (gameover){
        if(playerwon){
            textArea.innerText += "YOU WIN";
        }
        else{
            textArea.innerText += "DEALER WINS";
        }
        newGame.style.display = 'inline';
        hitbutton.style.display ='none';
        staybutton.style.display ='none';
    }

    for( var i=0; i<deck.length; i++){
        textArea.innerText+= '\n' + getCardString(deck[i]);
    }
    }

//updates scoreboard
function updatescores(){
    dealerscore = getscore(dealercards);
    playerscore = getscore(playercards);
}

hitbutton.addEventListener('click', function(){
    playerCards.push(getnextcard());
    checkforendofgame();
    showstatus();
});

staybutton.addEventListener('click',function(){
    gameover = true;
    checkforendofgame();
    showstatus();

});

function checkforendofgame(){
    //todo
    updatescores();
    if(gameover){
        //let dealer take cards
        while(dealerscore < playerscore
            && playerscore <= 21
            && dealerscore <= 21){
                dealercards.push(getnextcard());
                updatescores();
            }
    }
    if (playerscore > 21){
        playerwon = false;
        gameover = true;
    }
    else if(dealerscore > 21){
        playerwon = true;
        gameover= true;
        
    }
    else if(gameover){
        if(playerscore > dealerscore){
            playerwon = true;
        }
        else{
            playerwon = false;
        }
        
    }


}

//getscore
function getscore(cardarray){
    let score = 0;
    let hasAce = false;
    for(let i = 0; i<cardarray.length; i++){
        let card = cardarray[i];
        score +=  getcardnumericvalue(card);
        if(card.values === 'Ace'){
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21){
        return score + 10;
    }

    return score;
}

//Game variables
let gameStarted = false,
    gameover = false,
    playerwon = false,
    dealercards = [],
    playercards = [],
    dealerscore = 0,
    playerscore = 0,
    deck = [];

hitbutton.style.display = 'none';
staybutton.style.display = 'none';
showstatus();
 
newGame.addEventListener('click', function(){
    gameStarted = true;
    gameover = false;
    playerwon = false;

    deck = createdeck();
    shuffledeck(deck);    
    dealercards = [getnextcard(),getnextcard()];
    playerCards = [getnextcard(),getnextcard()];

    //textArea.innerText = 'Game started....';
    newGame.style.display = 'none';
    //okeybutton.style.display = 'none';
    hitbutton.style.display = 'inline';
    staybutton.style.display = 'inline';
    showstatus();
});

function createdeck(){
    let deck = [];
    for (let suitidx = 0; suitidx < suits.length; suitidx++){
        for (let valueidx = 0; valueidx < values.length; valueidx++){
            let card = {
                suit:suits[suitidx],
                value:values[valueidx]
            };
            deck.push(card);
        
        }
   }
 
   return deck;
  
   

}
function getCardString(card){    
    return card.value + ' of ' + card.suit;
}



function shuffledeck(deck){
    for( let i=0; i<deck.length; i++){
        let swapidx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapidx];
        deck[swapidx] = deck[i];
        deck[i] = tmp;
    }
}


function getnextcard(){
    return deck.shift();
}


playercards = [getnextcard(), getnextcard() ];

console.log("Welcome to Blackjack");
console.log(" your are dealt: \n\n");
console.log(" " + getCardString(playercards[0]));

console.log(" " + getCardString(playercards[1]));

function getcardnumericvalue(card){
    switch(card.values){
        case 'ace':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        default:
            return 10;
    }
}
