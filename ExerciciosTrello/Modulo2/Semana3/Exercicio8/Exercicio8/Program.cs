using System;

namespace Exercicio8
{
    public class Program
    {
        public static void Main()
        {
            

            Aluno aluno1 = new Aluno("José", 2);
            Aluno aluno2 = new Aluno("Maria", 2);
            Aluno aluno3 = new Aluno("Alex", 6);
            Aluno aluno4 = new Aluno("Bernardo", 5);

            List<Aluno> Alunos = new List<Aluno>() { aluno1, aluno2, aluno3, aluno4};
            Console.WriteLine("Alunos: ");
            foreach (Aluno alunos in Alunos)
            {
                Console.WriteLine(alunos.Nome);
            }
            Console.WriteLine("");
            Console.WriteLine("Alunos ordenados: ");
            List<Aluno> AlunosOrdenados = Alunos.OrderBy(a => a.Nome).ToList();
            foreach (Aluno alunos in AlunosOrdenados)
            {
                Console.WriteLine(alunos.Nome);
            }
        }
    }
}
