
var hanzHealth = 100;
var franzHealth = 100;
   
  function franzDuck(){
    $("body").on('click', '.duck', function() {
        document.getElementById('duck').play();
       
    })
console.log('Sprite was called')
     
  } 
  

function hanzResponses(){
  var choice = ['duck', 'block', 'dayDream', "takeHit",];
  var compChoice = choice[Math.floor(Math.random() * choice.length)];

  if(compChoice === "duck"){
      hanzHealth += 10;
      alert("He avoids his opponent by ducking!");
    }
    else if(compChoice === "block"){
      hanzHealth += 5;
      alert("He avoids the hit with a block!");
    }
  update()
    }

  hanzResponses()

  function franzResponses(){
  var choice = ['duck', 'block', 'dayDream', "takeHit",];
  var compChoice = choice[Math.floor(Math.random() * choice.length)];

  if(compChoice === "duck"){
      franzHealth += 10;
      alert("He avoids his opponent by ducking!");
    }
    else if(compChoice === "block"){
      franzHealth += 5;
     alert("He avoids the hit with a block!");
    }
    update()
  }
  franzResponses()




function franzPunch() {
    hanzResponses();
    hanzHealth -= 10;
    if (hanzHealth <= 0) {
        // alert("Franz wins!");
        reset();
    }
    update()
}

function hanzPunch() {
     franzDuck();
    franzResponses();
    franzHealth -= 10;
    if (franzHealth <= 0) {
        // alert("Hanz wins!!!");
        reset();
    }
    update()
}
function franzUpper() {
    hanzResponses();
    hanzHealth -= 20;
    if (hanzHealth <= 0) {
        // alert("Franz wins!");
        reset();
    }
    update()
}
function hanzUpper() {
    franzResponses();
    franzHealth -= 20;
    if (franzHealth <= 0) {
        // alert("Hanz wins!!!");
        reset();
    }
    update()
}

function reset() {
    hanzHealth = 100;
    franzHealth = 100;
    update()
}

function update() {
    var hanzHealthBarElem = document.getElementById('hanz-health-bar');
    var franzHealthBarElem = document.getElementById('franz-health-bar');

    hanzHealthBarElem.style.width = hanzHealth + '%';
    franzHealthBarElem.style.width = franzHealth + '%'
}

// working code


// var player = {
//     health: 100,
//     hits: 0,
//     items:[items.shield],
//     addMods: function(params) {
//         var total=0;
//         for(var i=0;i< this.items.length;i++) {
//             total = total + this.items[i].modifier;
//         }  
//         return total; 
//     }
// }



// function jab(name) {
//     if (player.name === "Hanz") {
//         updatePlayerHealth(name);
//         health -= 10;
//     }
// }
// jab()

//  function slap(){
//      player.health = player.health - (10 - (1 * player.addMods())); 
//      player.hits = player.hits +1;
//      upDate();
//      }










// var items = {
//     shield:new Item("shield",0.3,"This is an awesome shield!"),
//     armor:new Item("armor",0.4,"This is awesome armor!"),
//     sword:new Item("sword", 0.5, "This is an awesome sword!"),
//     potion:new Item("potion", 0.7,"This is an awesome potion!"),
// }

//  var player = {
//     health: 100,
//     hits: 0,
//     items:[items.armor],
//     addMods: function(params) {
//         var total=0;
//         for(var i=0;i< this.items.length;i++) {
//             total = total + this.items[i].modifier;
//         }  
//         return total; 
//     }
// }

//   var player = {
//     health: 100,
//     hits: 0,
//     items:[items.sword],
//     addMods: function(params) {
//         var total=0;
//         for(var i=0;i< this.items.length;i++) {
//             total = total + this.items[i].modifier;
//         }  
//         return total; 
//     }
// }

//   var player = {
//     health: 100,
//     hits: 0,
//     items:[items.potion],
//     addMods: function(params) {
//         var total=0;
//         for(var i=0;i< this.items.length;i++) {
//             total = total + this.items[i].modifier;
//         }  
//         return total; 
//     }
// }
// //  Adding modds for weapons above

//  function slap(){
//      player.health = player.health - (10 - (1 * player.addMods())); 
//      player.hits = player.hits +1;
//      upDate();
//      }

//  function punch(){
//      player.health = player.health - (10 - (5 * player.addMods())); 
//      player.hits = player.hits +1;
//      upDate();
//      }

//  function kick(){
//      player.health = player.health - (10 - (10 * player.addMods())); 
//      player.hits = player.hits +1;
//      upDate();    
//      }

// // update function
//  function upDate(){
//      var playerHealth = document.getElementById("player-health");
//      playerHealth.innerText = player.health.toString();
//      var hitsIncrease = document.getElementById("playerHits");
//      hitsIncrease.innerText = player.hits.toString();
//      if(player.health <= 10){
//          document.getElementById("player-panel").classList.add("panel-danger")
//     }else{
//          document.getElementById("player-panel").classList.remove("panel-danger")
//     }
//      if(player.health === 0){
//        alert: "You are dead!";    
//     }
//  }
// // update functions above
// // new objects to 

// function Item (name, modifier, description) {
//     this.name = name;
//     this.modifier = modifier;
//     this.description = description;
//     this.draw = function(){
//      document.getElemById("player-items")
//     }
// }

//  upDate();




