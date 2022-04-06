using System;
namespace Exercicio6
{
	public class Program
	{
		public static void Main()
		{
			Pedido pedido = new Pedido(DateTime.Now);

			PedidoItem item1 = new PedidoItem("Coca-Cola", 2.00);
			pedido.AddItem(item1);

			PedidoItem item2 = new PedidoItem("Suco de laranja", 4.00);
			pedido.AddItem(item2);

			PedidoItem item3 = new PedidoItem("Hamburguer", 6.00);
			pedido.AddItem(item3);

			PedidoItem item4 = new PedidoItem("X-Burguer", 8.00);
			pedido.AddItem(item4);

            Console.Write("Itens: "+pedido.QTDEItens().ToString());
			Console.WriteLine("");
			Console.Write("Valor total: R$" + pedido.Total().ToString("F2"));

		}
	}
}