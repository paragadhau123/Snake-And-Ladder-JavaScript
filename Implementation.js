const START_POSITION = 0;
const END_POSITION = 100;
let playerOne = 0;
let playerTwo = 0;
let newPosition = 0;
let switchplayer = 0;
let option = 0;
let diceNumber = 0;

class Model {

  GenerateRandomNumber = (number) => {
    var Random = Math.floor((Math.random() * number) + 1);
    return Random;
  }

  Play = (option, newPosition, diceNumber) => {

    switch (option) {

      case 1:
        newPosition = newPosition;
        console.log("Option is for No-Play");
        break;

      case 2:
        newPosition = newPosition + diceNumber;
        console.log("Option is for Ladder");
        if (newPosition > 100) {
          newPosition = newPosition - diceNumber;
        }
        break;

      case 3:
        newPosition = newPosition - diceNumber;
        console.log("Option is for Snake");
        if (newPosition < 0) {
          newPosition = 0;
        }
        break;

      default:
        console.log("!!!NOT VALID OPTION!!!");
        break;
    }
    return newPosition;
  }

  Simulation = (newPosition) => {

    diceNumber = this.GenerateRandomNumber(6);
    option = this.GenerateRandomNumber(3);
    console.log("-------------------------------------------------------------------------------");
    console.log("Die Number is => " + diceNumber);

    var newPosition = this.Play(option, newPosition, diceNumber);
    return newPosition;

  }

  WhoWins = () => {
    while (newPosition != END_POSITION) {
      var num = switchplayer % 2;     
      if(num == 0){
          if (playerOne != END_POSITION) {
            newPosition = playerOne;
            newPosition = this.Simulation(newPosition);
            playerOne = newPosition;

            console.log("New Position of player one => " + playerOne);
          }
          if (playerOne == END_POSITION) {

            console.log("Player one win the game as 100th position is reached");
          }
          switchplayer++;
        }
      else{
          if (playerTwo != END_POSITION) {
            newPosition = playerTwo;
            newPosition = this.Simulation(newPosition);
            playerTwo = newPosition;
            console.log("New Position of player two => " + playerTwo);
          }
          if (playerTwo == END_POSITION) {
            console.log("Player two win the game as 100th position is reached");
          }
          switchplayer++;
        }
      }
    }
  }

module.exports = new Model();