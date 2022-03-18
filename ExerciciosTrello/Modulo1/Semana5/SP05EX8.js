class Transacoes{
    constructor(conta, valorDaTransacao){
        this.conta = conta;
        this.valorDaTransacao = valorDaTransacao;
        this.saldo = 500;
        this.idDeTransferencia = 0;
        this.numeroDaConta = '';
        this.data = new Date();
    }

    tranferencia(nConta){

        this.idDeTransferencia = this.idDeTransferencia + 1;
        this.numeroDaConta = nConta;
        
        if(this.saldo < this.valorDaTransacao){
            return "Valor da tranferencia é maior que o saldo "
    }
        else{
            this.saldo = this.saldo - this.valorDaTransacao;
            return "Transferencia realizada"
        }
    }

    deposito(){
        this.saldo = this.saldo + this.valorDaTransacao;
        return "Deposito realizado"
    }
}

const cliente = new Transacoes("202530", 200);
cliente.tranferencia("25250");
console.log(cliente);