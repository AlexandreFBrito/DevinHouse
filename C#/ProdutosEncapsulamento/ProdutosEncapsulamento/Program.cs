using System;
using System.Globalization;

namespace ProdutosEncapsulamento
{
    class Program
    {
        static void Main(string[] args)
        {
            Produto p = new Produto("TV", 500.00, 10);

            //com properties
            p.Nome = "sdf";
            Console.WriteLine(p.Nome);
            Console.WriteLine(p.Preco);
            Console.WriteLine(p.Quantidade);            

            /*Sem properties
            p.SetNome("");

            Console.WriteLine(p.GetNome());
            */
        }
    }
}