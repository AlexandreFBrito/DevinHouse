class Produto{
    constructor(nome, img, parcelas){
        this.nome = nome;
        this.img = img;
        this.parcelas = parcelas;
    }

    static cadProdutos(produtosArray) {
        const cadProdutosArray = produtosArray;
        return cadProdutosArray;
    }    

}

const produto1 = new Produto("Coca-Cola", "coca.jpg", 12);
const produto2 = new Produto("Skol", "skol.jpg", 3);
const produto3 = new Produto("Notebook LG", "notebook.jpg", 10);

const produtosCadastrados = Produto.cadProdutos([produto1, produto2, produto3]);

function listarProdutos(){
    

    for (let i = 0; i < produtosCadastrados.length; i++) {
        let lista = document.getElementById('listaProdutos');
        let numeroLinhas = lista.rows.length;
        let linha = lista.insertRow(numeroLinhas);
        let celula1 = linha.insertCell(0);
        let celula2 = linha.insertCell(1);
        let celula3 = linha.insertCell(2);

        celula1.innerHTML = produtosCadastrados[i].nome;
        celula2.innerHTML = produtosCadastrados[i].img;
        celula3.innerHTML = `<select><option>${produtosCadastrados[i].parcelas}</option></select>`;

    }
}

