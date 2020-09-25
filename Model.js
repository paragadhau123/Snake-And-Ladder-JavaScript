class Model
{
    Simulation()    
      {
       var START_POSITION = 0;
       var END_POSITION = 100;
       var option = 0;
       var diceNumber = 0;
       var newPosition = START_POSITION;
       var numberOfTimesDiceRoll = 0;

        console.log("Starting Position : "+ START_POSITION);
        console.log("Ending Position : "+ END_POSITION);

        while(newPosition<END_POSITION){

        var diceNumber =this.throwDice();
        numberOfTimesDiceRoll = numberOfTimesDiceRoll + 1;

        var option = this.optionCheck();
        console.log("-------------------------------------------------------------------------------");
        console.log("Die Number is : "+diceNumber);

        if (option == 2)
        {
           newPosition = newPosition+diceNumber;
           console.log("----Option is for Ladder----");
           if (newPosition>100)
             {
               newPosition = newPosition - diceNumber;
             }
        }
        else if (option == 3)
        {
           newPosition = newPosition-diceNumber;
           console.log("----Option is for Snake----");
           if(newPosition<0)
             {
                 newPosition = 0;
             }
        }
        else if (option == 1)
        {
           newPosition=newPosition;
           console.log("-----Option is for No-Play-----");
         }        
       console.log("New Position is : "+newPosition);
       }
       console.log("Number of times dice roll : "+numberOfTimesDiceRoll);
     }
       optionCheck()
        {
         var Random = Math.floor((Math.random()*3)+1);
         return Random;
        }

         throwDice()
         {
          var Random = Math.floor((Math.random()*6)+1);
          return Random;
         }
      
    }
    module.exports = new Model();