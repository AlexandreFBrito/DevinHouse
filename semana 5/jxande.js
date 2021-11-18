//Autor Alexandre
//17/11/2021

function get(seletor) {

    //Recuperar o seletor 
    const elemento = document.querySelector(seletor);

    if (elemento == null) {
        //se for igual a nulo ele cria uma exceção
        throw new Error('O seletor "' + seletor + '" não foi encontrado');
    }

    return elemento;
}


function modificaCSS(seletor, ajudante){
    
    element = get(seletor);

    if(typeof ajudante == 'function'){

        ajudante(element.style);

    }else if(typeof callback == 'string'){

        element.style.cssText = ajudante;

    }else if(typeof ajudante == 'object'){

        for(let atributo in ajudante){

            element.style[atributo] = ajudante[atributo];

        }

    }else{
        throw new Error('O seletor "ajudante" não é um tipo apropriado');
    }

}

function addClickAction(seletor, callback){
    const element = get(seletor);

    element.addEventListener("click", callback);
}

function addGenericAction(seletor, event, callback){
    const element = get(seletor);

    element.addEventListener(event, callback);
}