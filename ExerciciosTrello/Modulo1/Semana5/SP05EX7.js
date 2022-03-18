class Cliente{
    constructor(cpf){
        this.cpf = cpf;
    }


    validaCPF() {
        if(this.cpf.length > 11 || this.cpf.length < 11){
            return 'CPF Inválido'
        }else{
            return 'CPF Válido'
        }
    }

}

const cliente = new Cliente("00000000001");
console.log(cliente.validaCPF());