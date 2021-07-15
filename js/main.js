var kilometri=parseInt(prompt("quanti km"));
var eta=parseInt(prompt("eta?"));

if(isNaN(kilometri)||kilometri>0){
    alert(kilometri non validi )
}

if(isNaN(kilometri)||kilometri>0){
    alert(kilometri non validi )
}

var prezzo=kilometri*0.21;
if(eta<=18){
    prezzo=prezzo*0.8;
}
if(eta>=65){
    prezzo=prezzo*0.6;
}

document.writeln(prezzo);