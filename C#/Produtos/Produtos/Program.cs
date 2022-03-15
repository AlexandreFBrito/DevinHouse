using System;
using System.Globalization;
namespace Produtos
{
     internal class Program
    {
       static void Main(string[] args)
        {
                        
            Console.WriteLine("Entre com os dados do produto:");
            Console.Write("Nome: ");            
            string nome = Console.ReadLine();
            Console.Write("Preço: ");
            double preco = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
            
            Produto p = new Produto(nome, preco);

            //Console.Write("Quantidade: ");
            //int quantidade = int.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);            
            //Produto p = new Produto(nome, preco, quantidade);

            Produto p2 = new Produto();

            //instanciando o produto direto sem precisar do construtor na classe, caso tem um construtor com 3 argumentos tem que ter o construtor padrão sem argumentos
            Produto p3 = new Produto { Nome = "TV", Preco = 500, Quantidade = 20 };
            
            
            Console.WriteLine(" ");
            Console.WriteLine("Dados do produto " + p);
            Console.WriteLine(" ");

            Console.WriteLine("digite o número de produtos a ser adicionado no estoque");
            int qte = int.Parse(Console.ReadLine());
            p.AdicionarProdutos(qte);
            Console.WriteLine(" ");
            Console.WriteLine("Dados atualizados " + p);
            Console.WriteLine(" ");

            Console.WriteLine("digite o número de produtos a ser removido no estoque");
            qte = int.Parse(Console.ReadLine());
            p.RemoverProdutos(qte);
            Console.WriteLine(" ");
            Console.WriteLine("Dados atualizados " + p);
            Console.WriteLine(" ");


        }
    }
}