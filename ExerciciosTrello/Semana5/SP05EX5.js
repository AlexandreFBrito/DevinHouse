class Cliente{
    constructor(nome, cpf, endereco, telefone){
        this._nome = nome;
        this._cpf = cpf;
        this._endereco = new Array(endereco);
        this._telefone = telefone;
    }
}
class Conta extends Cliente{
    constructor(nome, cpf, endereco, telefone, conta, saldo){
        super(nome, cpf, endereco, telefone);
        this._conta = conta;
        this._saldo = saldo;
    }
}

const cliente = new Conta("João", "12345678900", ["Rua b"], "790000000", "123456", "R$100");

console.log(cliente);