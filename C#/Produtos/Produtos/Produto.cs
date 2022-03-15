using System.Globalization;

namespace Produtos
{
    internal class Produto
    {
        public string Nome;
        public double Preco;
        public int Quantidade;
        
        //Construtor sem argumentos
        public Produto()
        {

        }

        //construtor com argumentos
        public Produto(string nome, double preco, int quantidade)
        {
            //this é uma referência para o próprio objeto
            this.Nome = nome;   
            this.Preco = preco;
            this.Quantidade = quantidade;

        }

        //construtor com dois argumentos e outro recebendo um valor padrão
        public Produto(string nome, double preco)
        {
            this.Nome= nome;
            this.Preco = preco;
            Quantidade = 0;
        }

        public double ValorTotalEmEstoque()
        {
            return Quantidade * Preco;
        }

        public void AdicionarProdutos(int quantidade)
        {
            Quantidade = Quantidade + quantidade;
        }

        public void RemoverProdutos(int quantidade)
        {
            Quantidade = Quantidade - quantidade;
        }

        public override string ToString()
        {
            return Nome + ", $ " 
                + Preco.ToString("F2", CultureInfo.InvariantCulture)
                + ", "
                + Quantidade 
                +" unidades, Total: $ "
                + ValorTotalEmEstoque().ToString("F2", CultureInfo.InvariantCulture);

        }
    }
}
