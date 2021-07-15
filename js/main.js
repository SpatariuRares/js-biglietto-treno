var kilometri=parseInt(prompt("quanti km"));
var eta=parseInt(prompt("eta?"));


var prezzo = kilometri*0.21;

if(eta<=18){
    prezzo = prezzo*0.8;
}
if(eta>=65){
    prezz = prezzo*0.6;
}

document.writeln(prezzo);