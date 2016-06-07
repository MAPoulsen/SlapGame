
var hanzHealth = 100;
var franzHealth = 100;
var victory = 'false';

function update() {
    if(victory === 'false'){
    var hanzHealthBarElem = document.getElementById('hanz-health-bar');
    var franzHealthBarElem = document.getElementById('franz-health-bar');

    hanzHealthBarElem.style.width = hanzHealth + '%';
    franzHealthBarElem.style.width = franzHealth + '%';
    }else{
        return
    }
}

function reset() {
    victory = 'false';
    hanzHealth = 100;
    franzHealth = 100;
    $('#Hanz').empty();
    $('#Hanz').append('<img src="img/hanz.png">');
    update();
    $('#Franz').empty();
    $('#Franz').append('<img src="img/franz.png">')
}



function hanzResponses() {
    var choice = ['duck', 'block', 'dayDream', "takeHit",];
    var compChoice = choice[Math.floor(Math.random() * choice.length)];


    function hanzAnimateDuck() {
        $('#Hanz').empty();
        $('#Hanz').append('<img src="img/hDuck.gif">')
        setTimeout(function () {
            $('#Hanz').empty();
            $('#Hanz').append('<img src="img/hanz.png">')
        }, 500)
    }

    function hanzAnimateBlock() {
        $('#Hanz').empty();
        $('#Hanz').append('<img src="img/HanzBlock.gif">')
        setTimeout(function () {
            $('#Hanz').empty();
            $('#Hanz').append('<img src="img/hanz.png">')
        }, 500)
    }
    if (compChoice === "duck") {
        hanzAnimateDuck();
        hanzHealth += 10;
        //alert("He avoids his opponent by ducking!");
    }
    else if (compChoice === "block") {
        hanzAnimateBlock();
        hanzHealth += 5;
        //alert("He avoids the hit with a block!");
    }
    update()
}




function franzResponses() {
    var choice = ['duck', 'block', 'dayDream', "takeHit",];
    var compChoice = choice[Math.floor(Math.random() * choice.length)];

    function franzAnimateDuck() {
        $('#Franz').empty();
        $('#Franz').append('<img src="img/fDuck.gif">')
        setTimeout(function () {
            $('#Franz').empty();
            $('#Franz').append('<img src="img/franz.png">')
        }, 500)
    }
    function franzAnimateBlock() {
        $('#Franz').empty();
        $('#Franz').append('<img src="img/fBlock.gif">')
        setTimeout(function () {
            $('#Franz').empty();
            $('#Franz').append('<img src="img/franz.png">')
        }, 500)
    }

    if (compChoice === "duck") {
        franzAnimateDuck();
        franzHealth += 10;
        //alert("He avoids his opponent by ducking!");
    }
    else if (compChoice === "block") {
        franzAnimateBlock();
        franzHealth += 5;
        //alert("He avoids the hit with a block!");
    }
    update()
}

function hanzAnimatePunch() {
    $('#Hanz').empty();
    $('#Hanz').append('<img src="img/hBopf.gif" style="top: 34px; right: -67px; height: 365px;">')
    setTimeout(function () {
        $('#Hanz').empty();
        $('#Hanz').append('<img src="img/hanz.png">')
    }, 500)
}
function hanzAnimateUnder() {
    $('#Hanz').empty();
    $('#Hanz').append('<img src="img/hUnder.gif" style="height: 317px; right: -40px; top: 84px;">')
    setTimeout(function () {
        $('#Hanz').empty();
        $('#Hanz').append('<img src="img/hanz.png">')
    }, 500)
}

function franzAnimatePunch() {
    $('#Franz').empty();
    $('#Franz').append('<img src="img/fPunch.gif" style="height: 310px; top: 87px;">')
    setTimeout(function () {
        $('#Franz').empty();
        $('#Franz').append('<img src="img/franz.png">')
    }, 500)
}
function franzAnimateJab() {
    $('#Franz').empty();
    $('#Franz').append('<img src="img/fJab.gif" style="height: 260px;">')
    setTimeout(function () {
        $('#Franz').empty();
        $('#Franz').append('<img src="img/franz.png">')
    }, 500)
}
function hanzKO() {
    victory = 'true';
    $('#Hanz').empty();
    $('#Hanz').append('<img src="img/HanzKO.gif" style="top: 72px; height: 365px;">')
    setTimeout(function () {
        $('#Hanz').empty();   
        $('#Hanz').append('<img src="img/hanzKO.png" style="top: 54px; right: -68px; height: 385px;">')
    }, 2000)
}
function franzKO() {
    victory = 'true';
    $('#Franz').empty();
    $('#Franz').append('<img src="img/franzKO.gif" style="top: 169px;">')
    setTimeout(function () {
        $('#Franz').empty();
        $('#Franz').append('<img src="img/franzKO.png" style="top: 169px;">')
    }, 5000)
}



function hanzPunch() {
    if(victory === 'false'){
    hanzAnimatePunch();
    setTimeout(function () {
        franzResponses();
    }, 500);
    franzHealth -= 10;
    if (franzHealth <= 0) {
        franzKO();
        return
    } else {
        update();
    }
}
}

function franzPunch() {
     if(victory === 'false'){
    franzAnimatePunch();
    setTimeout(function () {
        hanzResponses();
    }, 500)
    hanzHealth -= 10;
    if (hanzHealth <= 0) {
        hanzKO();
        return
    } else {
        update();
    }
     }
}


function franzJab() {
     if(victory === 'false'){
    franzAnimateJab();
    setTimeout(function () {
        hanzResponses();
    }, 500)
    hanzHealth -= 20;
    if (hanzHealth <= 0) {
        hanzKO();
        return
    } else {
        update();
    }
     }
}

function hanzUnder() {
     if(victory === 'false'){
    hanzAnimateUnder();
    setTimeout(function () {
        franzResponses();
    }, 500)
    franzHealth -= 20;
    if (franzHealth <= 0) {
        franzKO();
        return
    } else {
        update();
    }
     }
}


// healthbar

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

//  var Hanz = {
//         name: "Hanz",
//         health: 100,
//     img: src="img/Hanz.png",
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
//        //alert: "You are dead!";    
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

// function attack (name, modifier, description){
//     this.name = name;
//     this.modifier = modifier;
//     this.description = description;
//     this.draw= function(){
//        document.getElemById('player-items') 
//     }
// }


