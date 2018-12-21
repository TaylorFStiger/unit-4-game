$( document ).ready(function(){
    var random =Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(random);
    // adding random number to the randomNumber id element in html 
    //
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // set up random numbers between 1 - 12 for each jewel
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decare score keeping variables
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('#randomNumber').text(random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //add wins to userTotal
  function youWon(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //add the losses to the userTotal
  function youLose(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //set up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            // win/lose conditions
          if (userTotal == random){
            youWon();
          }
          else if ( userTotal > random){
            youLose();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLose();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLose();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLose();
          }
    });   
  });