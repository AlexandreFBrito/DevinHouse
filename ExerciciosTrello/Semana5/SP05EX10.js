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
        const nome = produtosCadastrados[i].nome;
        const img = produtosCadastrados[i].img;
        const parcelas = produtosCadastrados[i].parcelas;
        
        console.log("Nome: "+nome+" imagem: "+img+" parcelas: "+parcelas);
    }
}

listarProdutos();