class Model
{
    Simulation()    
      {
       var START_POSITION = 0;
       var END_POSITION = 100;
       var option = 0;
       var diceNumber = 0;
       var newPosition = START_POSITION;

        console.log("Starting Position : "+ START_POSITION);
        console.log("Ending Position : "+ END_POSITION);

        while(newPosition<END_POSITION){

        var diceNumber =this.throwDice();
        var option = this.optionCheck();

        console.log("Die Number is :"+diceNumber);

        if (option == 2)
        {
           newPosition = newPosition+diceNumber;
           console.log("Ladder");
           if (newPosition>100)
             {
               newPosition = newPosition - diceNumber;
             }
           console.log("NewPosition is :"+newPosition);
        }
        else if (option == 3)
        {
           newPosition = newPosition-diceNumber;
           console.log("Snake");
           if(newPosition<0)
             {
                 newPosition = 0;
             }
           console.log("NewPosition is :"+newPosition);
        }
        else if (option == 1)
        {
           newPosition=newPosition;
           console.log("No-Play");
           console.log("NewPosition is :"+newPosition);
         }
       }
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