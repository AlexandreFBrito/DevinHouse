using System;
namespace Exemplo5
{
	public class Program
	{
		public static void Main()
		{
			Pessoa p1 = new Pessoa("José", 30);
			Pessoa p2 = new Pessoa("Maria", 20);
			Pessoa p3 = new Pessoa("Victor", 31);

			Console.WriteLine("Pessoa com maior idade");
			if (p1.Idade > p2.Idade && p1.Idade > p3.Idade)
            {
                Console.WriteLine(p1.ExibirPessoa());
            }
			else if (p2.Idade > p1.Idade && p2.Idade > p3.Idade)
            {
				
				Console.WriteLine(p2.ExibirPessoa());
            }
            else
            {
				Console.WriteLine(p3.ExibirPessoa());
			}
			

		}
	}
}