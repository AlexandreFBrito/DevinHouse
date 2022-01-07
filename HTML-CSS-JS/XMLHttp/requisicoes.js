//requisição com XHR
/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users");
xhr.responseType = "json";
xhr.onload = () => {
    console.log(xhr.response);
}
xhr.onerror = () =>{
    console.log("Error");
}
xhr.send(); */


//Requisição com Fetch

/* const infos ={
    method: 'GET'
};
fetch("https://reqres.in/api/users", infos)
.then(response => response.json())
.then(dados => console.log(dados)); */



//metodo post com xhr
const dadosSucesso = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}
const dadosSemSucesso = {
    email: "eve.holt@reqres.in"
}

/* const xhr = new XMLHttpRequest();

xhr.open("POST", "https://reqres.in/api/login");
xhr.responseType = "json";
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = () => {
    if(xhr.status >= 400 && xhr.status < 500){
        console.log("Houve um Erro na requisição");
    }else
    {
        console.log("Login realizado com sucesso");
        console.log(xhr.response);
    }

}
xhr.send(JSON.stringify(dadosSucesso));  */

//metordo post com fetch
const headersConfig = new Headers();

headersConfig.append("Content-Type", "application/json");

const infos = {
    method: "POST",
    body: JSON.stringify(dadosSucesso),
    headers: headersConfig
}

fetch("https://reqres.in/api/login", infos)
.then(response => {
    if(response.status >= 400){
        console.log("Houve um Erro na requisição");
    }else
    {
        return response.json();
    }
})
.then(dados => console.log(dados))
.catch(erro => console.log("Houve um erro na requisição - "+ erro));