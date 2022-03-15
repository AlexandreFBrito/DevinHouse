using System.Globalization;
namespace ProdutosEncapsulamento
{
    class Produto
    {
        //Encapsulamento com properties
       //O nome não pode utilizar a auto properties pq tem uma logica particular
        private string _nome;
        //Com auto properties
        public double Preco { get; private set; }       
        public int Quantidade { get; private set; }

        public Produto()
        {

        }
        public Produto(string nome, double preco, int quantidade)
        {
            _nome = nome;
            Preco = preco;
            Quantidade = quantidade;
        }

        public string Nome
        {
            get { return _nome; }
            set {
                if (value != null && value.Length > 0)
                    _nome = value;
            }
        }

        /*Encapsulamento sem properties
        //Quando trabalhar com atributo privativo colocar outro padrão de nome _letraminuscula
        private string _nome;
        private double _preco;
        private int _quantidade;

        public Produto()
        {

        }
        public Produto(string nome, double preco, int quantidade)
        {
            _nome = nome;
            _preco = preco;
            _quantidade = quantidade;
        }

        //metodos get e set
        public string GetNome()
        {
            return _nome;
        }
        //void pq o método não vai retornar nada com saida e sim alterar o nome
        public void SetNome(string nome)
        {
            if (nome != null && nome.Length > 0)
                _nome = nome;
        }
        */

        public double ValorTotalEmEstoque()
        {
            return Preco * Quantidade;
        }
        public void AdicionarProdutos(int quantidade)
        {
            Quantidade += quantidade;
        }
        public void RemoverProdutos(int quantidade)
        {
            Quantidade -= quantidade;
        }
        public override string ToString()
        {
            return _nome
            + ", $ "
            + Preco.ToString("F2", CultureInfo.InvariantCulture)
            + ", "
            + Quantidade
            + " unidades, Total: $ "
            + ValorTotalEmEstoque().ToString("F2", CultureInfo.InvariantCulture);
        }
    }
}