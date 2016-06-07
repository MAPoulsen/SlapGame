
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
    }
    else if (compChoice === "block") {
        hanzAnimateBlock();
        hanzHealth += 5;
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
    }, 3000)
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


