// all the methods to manage the app interface

/** GLOBALS */
var _questions, _solutions, r1, r2, r3, r4, resultat;

/**
 * This function switch the scene of the app
 * 
 * */
function switchToScene(toActivate) {
    //
    $(".tab").hide();
    $(toActivate).show();
}

function prepareLook() {
    $('#menu, #topmenu, #content, #topmenu, #menu').show();
    $("*, body, #main_application").css("background-color", "#eee");
}

function acheterButton() {
    console.log("acheterButton");

    if(!$('#bAcheter').length) {
        var bb = document.createElement('button');
        var text = document.createTextNode("Acheter l'app");

        bb.appendChild(text);bb.id = "bAcheter";
        bb.className = 'btn btn-success btn-lg btn-block'; 
        $('#vip').append(bb);

        bb.onclick =
            () => {
                acheter();
            };
    }
}

function acheter() {
    alert("acheter app");
}

/** */
