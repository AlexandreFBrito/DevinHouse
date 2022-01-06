var idadeTotal = 0;
var mediaIdade = 0;
var mediaParticipantes = 0;
var participantes = 0;
var satisfacaoTotal = 0;

function pesquisa() {
    var nome = prompt('Digite o seu Nome');    
    var satisfacao = prompt('Digite um número de 1 a 10 para expressar sua satisfação');
    var idade = prompt('digite a sua idade');  
    var incluir = prompt('Podemos incluir você na lista de satisfeitos? digitar "s" ou "n"');
    
    if (incluir == 's'){
        participantes = participantes+1;
        calcular(eval(idade), eval(satisfacao), eval(participantes)); 
    }
    
}
function calcular(idade, satisfacao, nPart){
    idadeTotal = idadeTotal+idade;
    mediaIdade = idadeTotal/nPart;
    satisfacaoTotal = satisfacaoTotal+satisfacao;
    mediaParticipantes = satisfacaoTotal/nPart;

    document.getElementById("nParticipantes").innerHTML = 'Número de participantes: '+ nPart;
    document.getElementById("mParticipantes").innerHTML = 'Idade média dos participantes: '+ mediaIdade;
    document.getElementById("satisfeitos").innerHTML = 'Número de satisfeitos: '+ mediaParticipantes;

    alert('Salvo com sucesso...');
}