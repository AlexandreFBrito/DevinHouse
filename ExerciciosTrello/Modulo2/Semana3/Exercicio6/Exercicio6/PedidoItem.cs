namespace Exercicio6
{
    internal class PedidoItem
    {
        public string Nome { get; set; }
        public double Valor { get; set; }

        public PedidoItem(string nome, double preco)
        {
            Nome = nome;
            Valor = preco;
        }
        public double SubTotal()
        {
            return Valor;
        }
    }
}
