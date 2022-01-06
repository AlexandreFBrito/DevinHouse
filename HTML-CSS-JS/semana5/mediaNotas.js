//calculando media das notas com REST

function media(...notas){
    let resultaddo = 0;
    for (let i = 0; i < notas.length; i++){
        resultaddo += notas[i];
    }
    return resultaddo/notas.length;
    
}

console.log(media(5,10,7,8,6,3));