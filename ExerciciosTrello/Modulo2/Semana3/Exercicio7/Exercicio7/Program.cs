using System;

namespace Exercicio7
{
	public class Program
	{
		public static void Main()
		{
			Exame exame = new Exame();

			Aluno aluno1 = new Aluno("José", 6);
			exame.AddItem(aluno1);
			Aluno aluno2 = new Aluno("Maria", 8);
			exame.AddItem(aluno2);
			Aluno aluno3 = new Aluno("João", 7);
			exame.AddItem(aluno3);
			Aluno aluno4 = new Aluno("Flávio", 9.2);
			exame.AddItem(aluno4);
			Aluno aluno5 = new Aluno("Reinan", 9.1);
			exame.AddItem(aluno5);

            Console.WriteLine(exame.MaiorNota());
            Console.WriteLine(exame.MenorNota());
			Console.WriteLine(exame.Media());
			Console.WriteLine(exame.Reprovados());
		}
	}
}