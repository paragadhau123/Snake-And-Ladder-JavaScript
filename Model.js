class Model
{
    Simulation()    
      {
       var START_POSITION = 0;
       var END_POSITION = 100;
        
        console.log("Starting Position : "+ START_POSITION);
        console.log("Ending Position : "+ END_POSITION);
        
        var Random = Math.floor((Math.random()*6)+1);
        console.log("Die Number is :"+Random);
       }
    }
    module.exports = new Model();