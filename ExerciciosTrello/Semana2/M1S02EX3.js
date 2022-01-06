var corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];

var corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];

var corDoTexto = ["white","black"];

function start(){
    var corDeFundoEscolhida = corDeFundo[getRand(0, corDeFundo.length - 1)];
    var corDosElementosSobrepostosEscolhida = corDosElementosSobrepostos[getRand(0, corDosElementosSobrepostos.length - 1)];
    var corDoTextoEscolhida = corDoTexto[getRand(0, corDoTexto.length - 1)];
    alteraOsEstilosDaPagina(corDeFundoEscolhida, corDosElementosSobrepostosEscolhida, corDoTextoEscolhida);
}

function getRand(min, max){
    return Math.floor(Math.random()*(max - min)+min)
}

function alteraOsEstilosDaPagina(corDeFundo, corDosElementosSobrepostos, corDoTexto){

    var fundo = document.getElementsByTagName("body")[0];
    fundo.style.backgroundColor = corDeFundo;
    
    var sobreposto = document.getElementById("main");
    sobreposto.style.background = corDosElementosSobrepostos;
    
    var corTexto = document.getElementsByClassName("texto")[0];
    corTexto.style.color = corDoTexto;
}

