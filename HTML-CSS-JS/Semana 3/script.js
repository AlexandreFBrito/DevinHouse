var corSelecionada = "tomato";
//Variavel apra o status da inversão
var statusInvert = true;


function mudarCorComClick(){
    const filhos = document.querySelectorAll(".flex-item");
    var corSelecionada = document.getElementById("corItens").value;
    filhos.forEach((filho) => {

      filho.addEventListener("click", (e) => {
         var itemClicado = e.srcElement;
         console.log(itemClicado.style.backgroundColor);
        if (itemClicado.style.backgroundColor == corSelecionada || itemClicado.style.backgroundColor == "") {
            filho.style.backgroundColor = "black";
          
        } else {
       
          filho.style.backgroundColor = corSelecionada;
         
        }
      });
    });
}

mudarCorComClick();

function adiciona(){
    //criar elementos, criar a tag, preencher com valor
    //capturando quantos flexitens tem, ele retorna um array
    var quantidadeDeItens = document.getElementsByClassName("flex-item").length;
    //pegando o ultimo elemento
    var ultimoElemento = document.getElementsByClassName("flex-item")[quantidadeDeItens - 1];
    //capturando o valor do texto do elemento
    var numero = +ultimoElemento.textContent + 1;
    
    //criação da tag
    var novoitem = `<li class="flex-item">${numero}</li>`;

    //inserir elemento
    var itens = document.getElementsByClassName("flex-container")[0].innerHTML;
    itens += novoitem;
    document.getElementsByClassName("flex-container")[0].innerHTML = itens;

    mudarCorComClick();
}


//função para inverter
function invert(){
    //recupero o elemento
    var container = document.getElementsByClassName("flex-container")[0];

    if(statusInvert){
        container.style.flexDirection = "row";
        container.style.flexWrap = "wrap";
        statusInvert = false;
    }else{
        container.style.flexDirection = "row-reverse";
        container.style.flexWrap = "wrap-reverse";
        statusInvert = true;
    }

}

function mudaJustificacao(){
    var container = document.getElementsByClassName("flex-container")[0];
    var justificacaoSelecionada = document.getElementById("possiveisJustificacoes").value;
    container.style.justifyContent = justificacaoSelecionada;
}

function mudaCorDosItens(){
    corSelecionada = document.getElementById("corItens").value;
    var itens = document.getElementsByClassName("flex-item");

    for(var item of itens){
        item.style.background = corSelecionada;
    }
}