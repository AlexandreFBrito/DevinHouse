const $button = document.getElementById("gerador");



function reloadMeme() {

    //recuperar os valores

    const textoSuperior = document.getElementById("superior").value;
    const textoinferior = document.getElementById("inferior").value;
    const valorMarcado = document.querySelector("input[name='qualMeme']:checked").value;

    //montar url
    const urlAfraid = `http://apimeme.com/meme?meme=${valorMarcado}&top=${textoSuperior}&bottom=${textoinferior}`;

    //exibir imagens
    const $footer = document.querySelector("footer");

    //$body.style.background = "#c1c1c1";

    const imagemExibidaParaOUsuario = document.createElement("img");
    imagemExibidaParaOUsuario.src = urlAfraid;

    $footer.innerHTML = "";
    $footer.appendChild(imagemExibidaParaOUsuario);
}
const $superior = document.getElementById("superior");
const $inferior = document.getElementById("inferior");

const multiOpcoes =  document.querySelectorAll("input[name='qualMeme']")

for(let opcao of multiOpcoes){
    opcao.addEventListener("change", reloadMeme);
}

$superior.addEventListener("keyup", reloadMeme);
$inferior.addEventListener("keyup", reloadMeme);
