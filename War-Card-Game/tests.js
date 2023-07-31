const expect = chai.expect
const assert = chai.assert

//create a card
//should create an object with 3 parameters: name, suit & value
//should return an array that is not in the same order as the original

//this unit test is to verify that the method is creating cards properly in the correct order. 

describe('War Card Game Unit Tests', () => {
    describe("Create a Card, Create a Deck, Shuffle the Deck and then Deal the deck ", () => {
      it("Test1 Create a Card: Should create an object with 3 parameters: name, suit, value ", () => {
      class Card {
          constructor(){
              this.name = name; 
              this.suit = suit; 
              this.value = value; 
          }
      }
      let name = "K"; 
      let suit = "♠"; 
      let value = 13; 
      let card = new Card(name, suit, value)
          console.log('this is the test ', card); 
          console.log({ suit: suit, name: name, value: value });
      expect(card).to.deep.equal({ name: name, suit: suit, value: value });
      })
    })
})
//tests.js


