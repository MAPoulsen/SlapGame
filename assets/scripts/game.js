var health = 100;

var hits = 0;
 
var playerHealth = document.getElementById("player-health");
 
var hitsIncrease = document.getElementById("playerHits");
 
 
 function slap(){
     health = health - 1; 
     hits = hits +1;
     upDate();
     }
  
 function punch(){
     health = health - 5; 
     hits = hits +1;
     upDate();
     }
     
 function kick(){
     health = health - 10; 
     hits = hits +1;
     upDate();
     }
 
//  Jake how does this work? inner text and .tostring?
 function upDate(){
     playerHealth.innerText = health.toString(); 
     hitsIncrease.innerText = hits.toString();
 }
 
 
 upDate();


  
// //  Rob code 
//   var update = document.getElementById('playerHealth');
//   function updateHealth(){
//      update.innerText = health.toString()    
//      update.innerText = playerHealth.toString()    
//   }
  
//   var displayHits = document.getElementById('playerHits');
//   function updateHits(){
//      displayHits.innerText = hits.toString()    
//       displayHits.innerText = playerHits.toString()    
//   }
  
//   var displayName = document.getElementById('playerName');
//  @@ -22,18 +22,21 @@ function slap(){
//       playerHealth = playerHealth-1;
//       playerHits = playerHits+1;
//       updateHealth()
//      updateHits()
//   }
  
//   function punch(){
//       playerHealth = playerHealth-5;
//       playerHits = playerHits+1;
//       updateHealth()
//      updateHits()
//   }
  
//   function kick(){
//       playerHealth = playerHealth-10;
//       playerHits = playerHits+1;
//       updateHealth() 
//      updateHits()
//   }
      
//   updateName()

