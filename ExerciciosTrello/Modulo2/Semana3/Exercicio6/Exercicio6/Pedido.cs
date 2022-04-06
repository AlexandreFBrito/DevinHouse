using System.Text;
namespace Exercicio6
{
    internal class Pedido
    {
        public DateTime DataPedido { get; set; }
        public List<PedidoItem> ListPedidos { get; set; } = new List<PedidoItem>();

        public Pedido()
        {

        }
        public Pedido(DateTime datapedido)
        {
            DataPedido = datapedido;
        }
        public void AddItem(PedidoItem item)
        {
            ListPedidos.Add(item);
        }
        public void RemoveItem(PedidoItem item)
        {
            ListPedidos.Remove(item);
        }

        public double Total()
        {
            double soma = 0.0;
            foreach (PedidoItem item in ListPedidos)
            {
                soma += item.SubTotal();
            }
            return soma;
        }
        public int QTDEItens()
        {
            return ListPedidos.Count;
        }
    }
}
