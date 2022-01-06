
var dadosCliente = new Array();
var dadosClienteJson = JSON.parse(localStorage.getItem("clientes"));

if(dadosClienteJson != null){
    dadosCliente.push(dadosClienteJson);
}

class Endereco {
    constructor(logradouro, numero, cidade, estado, pais, cep){
        this._logradouro = logradouro;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
        this._pais = pais;
        this._cep = cep;
    }
}

function cadastrarCliente(){
    const logradouro = document.querySelector("#flogradouro").value;
    const numero = document.querySelector("#fnumero").value;
    const cidade = document.querySelector("#fcidade").value;
    const estado = document.querySelector("#festado").value;
    const pais = document.querySelector("#fpais").value;
    const cep = document.querySelector("#fcep").value;

    const cliente = new Endereco(logradouro, numero, cidade, estado, pais, cep);
    
    dadosCliente.push(cliente);
    let salvarFormJson = JSON.stringify(dadosCliente);
    localStorage.setItem('clientes', salvarFormJson);
}
