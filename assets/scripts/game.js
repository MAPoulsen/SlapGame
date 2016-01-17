
var items = {
    shield:new Item("shield",0.3,"This is an awesome shield!"),
    armor:new Item("armor",0.4,"This is awesome armor!"),
    sword:new Item("sword", 0.5, "This is an awesome sword!"),
    potion:new Item("potion", 0.7,"This is an awesome potion!"),
}
var player = {
    health: 100,
    hits: 0,
    items:[items.shield],
    addMods: function(params) {
        var total=0;
        for(var i=0;i< this.items.length;i++) {
            total = total + this.items[i].modifier;
        }  
        return total; 
    }
}
 
 var player = {
    health: 100,
    hits: 0,
    items:[items.armor],
    addMods: function(params) {
        var total=0;
        for(var i=0;i< this.items.length;i++) {
            total = total + this.items[i].modifier;
        }  
        return total; 
    }
}
 
  var player = {
    health: 100,
    hits: 0,
    items:[items.sword],
    addMods: function(params) {
        var total=0;
        for(var i=0;i< this.items.length;i++) {
            total = total + this.items[i].modifier;
        }  
        return total; 
    }
}
 
  var player = {
    health: 100,
    hits: 0,
    items:[items.potion],
    addMods: function(params) {
        var total=0;
        for(var i=0;i< this.items.length;i++) {
            total = total + this.items[i].modifier;
        }  
        return total; 
    }
}
//  Adding modds for weapons above
 
 function slap(){
     player.health = player.health - (10 - (1 * player.addMods())); 
     player.hits = player.hits +1;
     upDate();
     }
  
 function punch(){
     player.health = player.health - (10 - (5 * player.addMods())); 
     player.hits = player.hits +1;
     upDate();
     }
     
 function kick(){
     player.health = player.health - (10 - (10 * player.addMods())); 
     player.hits = player.hits +1;
     upDate();    
     }
 
// update function
 function upDate(){
     var playerHealth = document.getElementById("player-health");
     playerHealth.innerText = player.health.toString();
     var hitsIncrease = document.getElementById("playerHits");
     hitsIncrease.innerText = player.hits.toString();
     if(player.health <= 10){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
     if(player.health === 0){
       alert: "You are dead!";    
    }
 }
// update functions above
// new objects to 

function Item (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
     document.getElemById("player-items")
    }
}
 
 upDate();


  

