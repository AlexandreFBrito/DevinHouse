const soma = (num1, num2) =>{
    return num1+num2;
};

const dobro = numero => numero*2;

const imprimirOi = () => console.log("Oi");

console.log(soma(5, 6));
console.log(dobro(10));
imprimirOi();

class Timer{
    constructor(duracao){
        this._duracao = duracao;
    }

        iniciarComFunction(){
            setTimeout( function() {
                console.log("Executando com function");
                console.log(this._duracao);
            }, this._duracao);
        }

        iniciarComArrowFunction(){
            setTimeout(() => {
               console.log("Executando com Arrow Function"); 
               console.log(this._duracao);
            }, this._duracao);
        }

}

const time1 = new Timer(2000);

time1.iniciarComFunction();

const timer2 = new Timer(5000);

timer2.iniciarComArrowFunction();