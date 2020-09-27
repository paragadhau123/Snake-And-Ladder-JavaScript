var START_POSITION = 0;
var END_POSITION = 100;
class Model {

  GenerateRandomNumber(number) {
    var Random = Math.floor((Math.random() * number) + 1);
    return Random;
  }

  Play(option,newPosition,diceNumber) {

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

  Simulation() {

    var option = 0;
    var diceNumber = 0;
    var numberOfTimesDiceRoll = 0;
    var newPosition = START_POSITION;

     while (newPosition < END_POSITION) {

      var diceNumber = this.GenerateRandomNumber(6);
      numberOfTimesDiceRoll = numberOfTimesDiceRoll + 1;

      var option = this.GenerateRandomNumber(3);
      console.log("-------------------------------------------------------------------------------");
      console.log("Previous position is => " + newPosition);
      console.log("Die Number is => " + diceNumber);

      var newPosition = this.Play(option,newPosition,diceNumber);

      console.log("New Position is => " + newPosition);
    }
    console.log("Number of times dice roll => " + numberOfTimesDiceRoll);
  }

}
module.exports = new Model();