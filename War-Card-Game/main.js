//This is the code for my Week 06-Final Project

//this class defines the card class
class Card{
    constructor(suit, name, value){
        this.name = name;
        this.suit = suit; 
        this.value = value; 
    }
    //this will set the color of the suits
    get color(){
        return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
        //? is used with : and used in conditional statements
        //another way of saying if else statements
        //if it is not a club or spade then the it will be a heart or diamond
    }
}

//this class will define the deck of cards, and create a deck with 52 cards
class Deck{ 
    constructor(){
        this.cards = [];
        this.suit = ["♣", "♠", "♦", "♥"]; 
        this.name = ["A",  
        "2", 
        "3", 
        "4", 
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "10", 
        "J", 
        "Q", 
        "K",];
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 
    }
 
    buildDeck(){//this method will create the deck of cards
        console.log("Creating a new deck "); 
        //this first loop will iterate through the suit of the cards
        for(let i = 0; i < this.suit.length; i++){
            //this nested  loop will iterate through the names & values of the cards. 
            for(let x = 0; x < this.name.length; x++){
                //this pushes the cards object to the empty array
                 this.cards.push(new Card(this.suit[i], this.name[x], this.values[x]))
        }
    }
};

//this method will shuffle the deck of cards 
    shuffleDeck(){
        console.log('Shuffling Deck ');
        let shuffledDeck = [];//the empty array that the random cards will be shuffled too
        //52 due to shuffling that amount of cards
        for(let i = 0; i < 52; i++){
            //this will take the last element in the array and multiple it by a random number
            let randomCardSpot = Math.floor((this.cards.length - 1) * Math.random()); 
            //this will set the randomCard variable to the spliced object based on the randomCardSpot
            let randomCard = this.cards.splice(randomCardSpot, 1); 
            //this will push the random card from above into an empty array called shuffleDeck
            shuffledDeck.push(...randomCard)
        }
        return shuffledDeck; 
    }

    //this method will deal the cards to the players
    dealDeck(player, shuffledCards){
        console.log('Dealing Cards '); 
        
        let dealingCards1= shuffledCards.splice(0,26); 
        //this splits the deck and pushes the first 26 cards to player 1
        player[0].hands.push(...dealingCards1); 
        //this will splice the 2nd half of the shuffled deck and push to the array
        let dealingCards2 = shuffledCards.splice(0,26); 
        //this will push the 2nd half of the shuffled cards to Player 2
        player[1].hands.push(...dealingCards2);
    }
}

//this Class will now create the players for the game
class Players{
    constructor(name){
        this.name = name;
        this.points = 0; 
        this.hands = [];
    }
}


class Game{
    constructor(){
        this.player = [];//empty array that we will push the new players to. 
    }

    //This method will start the game
    beginGame(){
        //create players and assign them names
        this.player.push(new Players('Brittiney')); 
        this.player.push(new Players("Gabrielle"));
        console.log('DECLARE WAR!! ', this.player);

        //Create the deck and then shuffle the cards
        let myDeck = new Deck(); 
        myDeck.buildDeck();
        let shuffledDeck = myDeck.shuffleDeck(); 
        
        //This will deal the cards to the Players
        myDeck.dealDeck(this.player, shuffledDeck)
        console.log(this.player);

        //Play Game Method (Should run until one player is out of cards)
        this.playGame(); 

        //This is the results
        this.endGame(); 
    }

    //this method will be where the game is play
    playGame(){
        console.log("DECLARE WAR!!!!"); 
        let player1 = this.player[0];  
        let player2 = this.player[1]; 

        console.log("Taking turns ", player1, player2)
        
        let roundWinner = ''
        let round = 0; 

        //this Loop will run until one player runs out of cards, each iteration will pop the last card from each players array of cards and conpare the values of the cards and determine the winner
        while(player1.hands.length !== 0 && player2.hands.length !== 0) {
            let player1Card = player1.hands.pop(); 
            let player2Card = player2.hands.pop(); 
            if(player1Card.value > player2Card.value){
                roundWinner = player1.name; 
                player1.points += 1; 
                console.log('Round: ', (round += 1), '\nPlayer 1 Card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 Card: ', player2Card.name, ' of ', player2Card.suit, '\n Player 1 is the Winner'); 
            } else if (player2Card.value > player1Card.value){
                roundWinner = player2Card.name;
                player2.points += 1; 
                console.log('Round: ', (round += 1), '\nPlayer 1 Card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 Card: ', player2Card.name, ' of ', player2Card.suit, '\n Player 2 is the Winner'); 
            } else{
                console.log('Round: ', (round += 1), '\nPlayer 1 Card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 Card: ', player2Card.name, ' of ', player2Card.suit, '\n This is a Tie, No Winner');
            }
        }
    }

        //This method will run when the game is over and announce the winner!
        endGame(){
            let gameWinner = ''; 
            let player1 = this.player[0]; 
            let player2 = this.player[1]; 
            let winnerPoints = 0; 

        //This if statement compares the points for each player and determine who won the game and console log out the winner of the game
            if(player1.points > player2.points){
                gameWinner = player1.name; 
                winnerPoints = player1.points; 
                alert (`GAME OVER! ${gameWinner}, Won the Game!
                FINAL SCORES: 
                ${player1.name} : ${player1.points}
                ${player2.name} : ${player2.points}
                Thanks for Playing! 
                `)
            } else if (player2.points > player1.points){
                gameWinner = player2.name;
                winnerPoints = player2.points;
                alert (`GAME OVER! ${gameWinner}, Won the Game!
                FINAL SCORES:
                ${player1.name} : ${player1.points}
                ${player2.name} : ${player2.points}
                Thanks for Playing! 
                `)
            } else {
                alert (`GAME OVER! TIED GAME!
                FINAL SCORES:
                ${player1.name} : ${player1.points}
                ${player2.name} : ${player2.points}
                Thanks for Playing! 
                `)
            }
        }
}

let game = new Game(); 
game.beginGame(); 






















