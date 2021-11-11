var igualacem = 0;
var maior = 0;
var menor = 0;

function resultado(){
    var numero = Math.floor(Math.random() * 1000);

    if (numero == 100){
        igualacem++;
    }
    else if(numero < 501){
        menor++;
    }
    else if (numero >= 501 && numero <= 1000){
        maior++;
    }

    if (numero == 100){
        if (igualacem == 1){
            document.body.style.backgroundColor = "black";
        }else{
            document.body.style.backgroundColor = "Orange";
        }
    }else{
        if (maior > menor){
            document.body.style.backgroundImage = "url('https://picsum.photos/200/300')";
        }else{
            document.body.style.backgroundImage = "url('https://via.placeholder.com/500')";
        }
    }

}