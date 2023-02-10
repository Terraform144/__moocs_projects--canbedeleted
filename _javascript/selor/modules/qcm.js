console.log("qcm.js");

var tableau_solution = [];
var compteur = 0;

/* todo optimize in a class if possible
class QCM {

    constructor() {

    }

}
*/

function startQCM(){
    console.log("startQCM");
    readDoc("selor");
}

function prepareQCMIntroText(){
    $('#content').html("Préparez-vous à passer l'entrainement au Test Selor de gardiennage. <br/>Ce test comprends 25 questions...<br/><br/>");
}

function startButton() {
console.log("startButton");

    var bb = document.createElement('button');
    var text = document.createTextNode("Commencer");

    bb.appendChild(text);bb.id = "bCommencer";
    bb.className = 'btn btn-dark btn-lg btn-block'; 
    $('#content').append(bb);
    bb.onclick =
        () => {
            startQCM();
        };
}

function readDoc(xmlDocument) {
    var text, parser, xmlDoc;

    var client = new XMLHttpRequest();
    client.open('GET', "qcm/"+xmlDocument+".xml");
    client.onreadystatechange = function() {
        
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(client.responseText,"text/xml");
        try {
            _questions = xmlDoc.getElementsByTagName("question");
            _solutions = xmlDoc.getElementsByTagName("solution");

            var r1 = xmlDoc.getElementsByTagName("a");
            var r2 = xmlDoc.getElementsByTagName("b");
            var r3 = xmlDoc.getElementsByTagName("c");
            var r4 = xmlDoc.getElementsByTagName("d");

//alert(_questions.length+" "+_solutions.length);
        } catch (ex) {
            console.log(ex);
        }

        // clear page
        $('#content').html('');

        // lancement de toutes les questions
        for(var i=0;i<_questions.length;i++)
            {
                try {
                    $('#content').append('<div class="group g'+(i)+'" style="background:#eee;'+(compteur==i?'':'display:none;')+'"><b>QUESTION '+(i+1)+'/</b> <br/><br/>'+_questions[i].firstChild.nodeValue+'<br/>'+
                        "<br/><div class='responses input-group' id='A_"+i+"'><div class='input-group-text'>A&nbsp;<input class='form-check-input mt-0' type='radio' name='g"+i+"' id='ipt_A_"+i+"' /></div><span class='form-control'>" + r1[i].firstChild.nodeValue+'</span></div>'
                        + "<div class='input-group responses' id='B_"+i+"'><div class='input-group-text'>B&nbsp;<input class='form-check-input mt-0' type='radio' name='g"+i+"' id='ipt_B_"+i+"' /></div><span class='form-control'>" + r2[i].firstChild.nodeValue + '</span></div>'
                        + "<div class='input-group responses' id='C_"+i+"'><div class='input-group-text'>C&nbsp;<input class='form-check-input mt-0' type='radio' name='g"+i+"' id='ipt_C_"+i+"' /></div><span class='form-control'>" + r3[i].firstChild.nodeValue + '</span></div>'
                        + "<div class='input-group responses' id='D_"+i+"'><div class='input-group-text'>D&nbsp;<input class='form-check-input mt-0' type='radio' name='g"+i+"' id='ipt_D_"+i+"' /></div><span class='form-control'>" + r4[i].firstChild.nodeValue + '</span></div>'); 
                    $('#content').append('</div>');
                } catch(ex) {
                    console.log(ex);
                }
                
            }
            $('#content').append('<div id="contentBut"></div>');
        // creation of the cursor buttons
        prepButtons();

    }
    client.send();
}

function prepButtons() {

    if (compteur>0) {nextButton('Previous')};
    if (compteur<24) {nextButton('Next')};
    if(compteur == 24) {validerButton()};

    // remove useless buttons
    if(compteur+1==_solutions.length) $('#bNext').remove();
    if(compteur==0) $('#bPrevious').remove();
}

function extraireSolutions() {
    for (var i = 0; i < _solutions.length; i++) {
        tableau_solution[i] = _solutions[i].firstChild.nodeValue;
    }
    console.log(tableau_solution);
}

function validerQCM(){

    extraireSolutions();var pts = 0;var i=1;

    $(".input-group-text").css("background-color", "#e9ecef");
    $('input[type=radio]:checked').each(function() {
        var res = $(this).attr('id').split("_");
        var namecontainer = "#"+res[1]+"_"+res[2];
        if(tableau_solution[res[2]]==res[1]) {
            pts++;
        } else {
            // put red the field
            $(namecontainer+" .input-group-text").css("background-color", "red");
        }
    });
}
function goNext() {
    if(compteur<_solutions.length-1) {
        compteur++;
        $('.group').hide();
        $('.g'+compteur).fadeIn();
        prepButtons();
    }
}
function goPrevious() {
    if(compteur>0) {
        compteur--;
        $('.group').hide();
        $('.g'+compteur).fadeIn();
        prepButtons();
    }
}
function nextButton(but_val) {
    console.log(but_val);
    
        if(!$('#b'+but_val).length) {
            var bb = document.createElement('button');
            var text = document.createTextNode(but_val);
        
            bb.appendChild(text);bb.id = "b"+but_val;
            bb.className = 'btn btn-dark btn-lg btn-block'; 
            $('#contentBut').append(bb);
            bb.onclick =
                () => {
                    if(but_val == 'Next') {
                        goNext();
                    } else {
                        goPrevious();
                    }
                };
        }
    }

function validerButton() {
console.log("validerButton");

    if(!$('#bValider').length) {
        var bb = document.createElement('button');
        var text = document.createTextNode("Valider");

        bb.appendChild(text);bb.id = "bValider";
        bb.className = 'btn btn-success btn-lg btn-block'; 
        $('#contentBut').append(bb);
        bb.onclick =
            () => {
                validerQCM();
            };
    }
}

// export des fonctionnalités
export { startQCM, startButton, readDoc, nextButton, validerButton, prepareQCMIntroText };