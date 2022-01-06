var numero = window.prompt("Digite um número de 1 a 10");

var body  = document.getElementsByTagName("body")[0];

if (numero > 0 && numero <= 10){

}else{
    alert("número inválido, por padrão será o 5");
    numero = 5;
}

var sections = "";

for(var i = 0; i < numero; i++){

    fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
        return data.json();
    }).then(function(json){
        var resultado = json.message;
        var sections = "<section style=\"background-image:url('"+resultado+"')\">dog</section>";
        body.insertAdjacentHTML("beforeend", sections);
    })
 
    fetch("https://api.thecatapi.com/v1/images/search").then(function(data){
        return data.json();
    
    }).then(function(json){
        var resultado = json[0].url;
        var sections = "<section style=\"background-image:url('"+resultado+"')\">cat</section>";
        body.insertAdjacentHTML("beforeend", sections);
    })


}

