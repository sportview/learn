
/* blackjack game
prepared by chakiwebs

*/

let suits = ['hearts', 'clubs', 'diamonds', 'spades'];
let values = ['ace', 'king', 'queen', 'Jack', 'Ten', 'Nine', 'Eight', 'seven', 'six','five', 'four', 'Three', 'Two'];


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
function getCardString(){
    return card.value + ' of ' + card.suit;
}
function getnextcard(){
    return deck.shift();
}
let deck = createdeck();

let playerCards = [getnextcard(), getnextcard() ];

console.log("Welcome to Blackjack");
//console.log(getCardString(playerCards[0]))
console.log(" your are dealt: ");
let gone = 56;
console.log(typeof(gone))
console.log(" " + getCardString(playerCards[0]) );
console.log(" " + getCardString(playerCards[1]) );

let textarea = document.getElementById('para');
//textarea.innerText = " I now working with javascript ";

let okbutton = document.getElementById('okey');
okbutton.addEventListener('click',function(){
    textarea.innerText=" Someone just clicked the button ";


}) 



console.log(typeof(gone))